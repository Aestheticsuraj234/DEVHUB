import { StyleSheet, Text, View, FlatList , TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Category } from '../constants/categoryData/Category'

const Item = ({name, isSelected, onPress})=>{
  return(
    <TouchableOpacity 
      style={[styles.BadgesContainer, isSelected ? { backgroundColor: '#1d242f' } : { backgroundColor: '#FFFFFF' }]} 
      onPress={onPress}
    >
      <Text style={[styles.BadgeText, isSelected ? { color: '#FFFFFF' } : { color: '#1d242f' }]}>{name}</Text>
    </TouchableOpacity>
  )
}


const Badges = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const handleBadgePress = (item) => {
    setSelectedBadge(item.id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Category}
        renderItem={({item}) => (
          <Item 
            name={item.name} 
            isSelected={item.id === selectedBadge}
            onPress={() => handleBadgePress(item)}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
      />
    </SafeAreaView>
  )
}

export default Badges

const styles = StyleSheet.create({
  BadgesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    padding: 6,
    width: 70,
    height: 31,
    borderRadius: 8,
    elevation: 4,
    marginHorizontal:16,

  },
  container:{
    height:50
  },
  BadgeText:{
    display:'flex',
    alignSelf:'center',
    textAlign:'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 15,
  }
})
