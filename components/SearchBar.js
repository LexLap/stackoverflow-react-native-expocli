import React, { useContext, useRef, useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text, Keyboard } from 'react-native';
import { SearchResultContext } from '../context/SearchResultContext';
import findStackUser from '../requests/StackApi';

const SearchBar = props => {
  
  const { setResultData } = useContext(SearchResultContext)
  const [tempInput, setTempInput] = useState('')

  const inputHandler = (inputText) => {
    setTempInput(inputText)
  }

  const searchHandler = () => {
    setTempInput('')
    Keyboard.dismiss();

    findStackUser(tempInput).then((searchResult)=>{
      if(searchResult)
        setResultData(searchResult)
    })
  }

  
  return(
    <View style={{ ...styles.container, ...props.style }}>

      <TouchableOpacity 
        activeOpacity={0.6} 
        onPress={searchHandler.bind(this, tempInput)}>

        <View style={styles.button}>
          <Text style={props.style}>Search</Text>
        </View>

      </TouchableOpacity>

      <TextInput 
        placeholderTextColor={props.style.color}
        placeholder='Enter user ID'
        value={tempInput}
        style={{ ...styles.input, ...props.style }}
        onChangeText={inputHandler}
        onSubmitEditing={searchHandler.bind(this, tempInput)}
        returnKeyType='search'
        keyboardType='number-pad'
        blurOnSubmit
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginVertical: 15,
    height: 45,
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  input: {
    height: '100%',
    width: '50%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    borderBottomWidth: 0,
    flex: 1
  },
  button: {
    borderRadius: 50,
    padding: 7
  }
});

export default SearchBar;
