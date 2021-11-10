import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SearchResultContext } from '../context/SearchResultContext';
import bubbleSort from '../helpers/SearchResultSorter'


const SortingBar = props => {
    const { searchResult, setResultData } = useContext(SearchResultContext)
    
    const sortHandler = (sort) =>{
        searchResult.searchItems = bubbleSort(sort, searchResult.searchItems)
        setResultData({
            userData: searchResult.userData,
            searchItems: searchResult.searchItems
        })
    }

    let content = <View></View>
    if(searchResult){
        content =
        <View style={{ ...styles.container, ...props.style }}>
            <Text style={{...styles.title, ...props.style}}>Sort by:</Text>
            <View style={{ ...styles.buttonsContainer, ...props.style }}>
                <TouchableOpacity 
                    activeOpacity={0.6} 
                    onPress={sortHandler.bind(this, 'view_count')}
                    >
                    <View style={{...styles.button, ...props.style}}>
                        <Text style={props.style}>Views</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.6} 
                    onPress={sortHandler.bind(this, 'answer_count')}
                    >
                    <View style={{...styles.button, ...props.style}}>
                        <Text style={props.style}>Answers</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.6} 
                    onPress={sortHandler.bind(this, 'creation_date')}
                    >
                    <View style={{...styles.button, ...props.style}}>
                        <Text style={props.style}>Date</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    }
    return (
        {...content}
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    buttonsContainer:{
        flexDirection: 'row'        
    },
    button: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 7,
        marginHorizontal: 10
    },
    title:{
        paddingRight: 10
    }
});

export default SortingBar;

