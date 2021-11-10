import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SortingBar from './components/SortingBar';
import UserInfo from './components/UserInfo';
import SearchResultContextProvider from './context/SearchResultContext';
import StackQuestionsScreen from './screens/StackQuestionsScreen';

export default function App() {
  
  const [style, switchStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  })
  const switchTheme = () =>{
    if(style.backgroundColor === 'white')
      switchStyle({
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'blue'
      })
    else switchStyle({
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'black'
    })
  }

  return (
    <SearchResultContextProvider>
        <View style={{...styles.screen, ...style}}>
          <Header switchTheme={switchTheme} style={{...style}} title='Stack Overflow Posts'/>
          <SearchBar style={style}/>
          <UserInfo style={style}/>
          <SortingBar style={style}/>
          <StackQuestionsScreen style={style}/>
        </View>
    </SearchResultContextProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  }
});
