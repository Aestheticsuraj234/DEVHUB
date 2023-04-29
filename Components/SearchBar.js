import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  const [text, onChangeText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.Search}
        onChangeText={onChangeText}
        value={text}
        placeholder='Search E-Books'
        placeholderTextColor={"#eee"}
      />
      <Feather name="search" size={24} color="black" style={styles.Searchicon} />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  Search: {
    marginTop: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: 332,
    height: 48,
    backgroundColor: '#1d242f',
    borderRadius: 10,
    color: '#fff',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22,

  }
  ,
  Searchicon:{
    position:'absolute',
    right:20,
    top:30,
    color:'#eee'

  }
})