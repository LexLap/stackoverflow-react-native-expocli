import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SearchResultContext } from '../context/SearchResultContext';

const UserInfo = props => {
    const { searchResult } = useContext(SearchResultContext)

    let content = <View></View>
    if(searchResult){
        content = 
        <View style={{ ...styles.container, ...props.style }}>

                <View style={{ ...styles.text, ...props.style }}> 
                  <Text style={props.style}>ID: {searchResult?.userData?.user_id}</Text>
                  <Text style={props.style}>Name: {searchResult?.userData?.name}</Text>
                  <Text style={props.style}>Reputation: {searchResult?.userData?.reputation}</Text>
                  <Text style={props.style}>Accept Rate: {searchResult?.userData?.accept_rate}</Text>
                  <Text style={props.style}>Questions Asked: {searchResult?.searchItems?.length}</Text>
                </View>

                <View>
                    <Image style={styles.image} source={{ uri: searchResult?.userData?.avatar }} />
                </View>
        </View>
    }
        
    return (
        {...content}
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        width: '85%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        borderRadius: 10,
    },
    image: {
        borderRadius: 5,
        width: 100,
        height: 100
    }
});

export default UserInfo;