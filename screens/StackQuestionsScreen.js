import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import WebViewModal from '../components/WebViewModal';
import { SearchResultContext } from '../context/SearchResultContext';
import dateConverter from '../helpers/TimestampToDate'

const StackQuestionsScreen = props => {
  const { searchResult } = useContext(SearchResultContext)
  const [ isWebViewModalVisible, setIsWebViewModalVisible ] = useState(false)
  const [ webViewUri, setWebViewUri ] = useState('')

  const handleWebViewModal = (uri) =>{
    if(uri){
      setWebViewUri(uri)
      setIsWebViewModalVisible(true)
    }else setIsWebViewModalVisible(false)
  }

  const renderListItem = (listLength, itemData) => 
  (
    <TouchableOpacity         
      activeOpacity={0.5} 
      onPress={handleWebViewModal.bind(this, itemData.item.link)}
      >

      <View style={{ ...styles.card, ...props.style }}>
        <Text style={props.style}>Title: {itemData.item.title}</Text>
        <Text style={props.style}>Views: {itemData.item.view_count}</Text>
        <Text style={props.style}>Answers: {itemData.item.answer_count}</Text>
        <Text style={props.style}>Created: {dateConverter(itemData.item.creation_date)}</Text>
      </View>
      <WebViewModal handleWebViewModal={handleWebViewModal} visible={isWebViewModalVisible} uri={webViewUri}/>
    </TouchableOpacity>
    
  )
    
  let content = <View></View>

  if(searchResult?.searchItems){
    content=
    <View style={styles.listContainer}>
      <FlatList
        keyExtractor={item => item.question_id}
        data={searchResult.searchItems}
        renderItem={renderListItem.bind(this, searchResult.searchItems.length)}
        contentContainerStyle={styles.list}
      />
      
    </View>
  }

  return (
    {...content}
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    flex: 1,
    borderRadius: 5

  },
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 1
  },

  list: {

  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default StackQuestionsScreen;