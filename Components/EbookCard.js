import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

import { EBookData } from '../constants/E-books/EbookData';


const Item = ({ Thumbnail }) => {

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={Thumbnail} style={styles.cardImage} resizeMode="contain" />
    </TouchableOpacity>

  )


}

const EbookCard = () => {
  return (
    <View style={styles.mainContainer} >
      <Text style={styles.heading}>E-books</Text>
      <FlatList
        data={EBookData}
        renderItem={({ item }) => (
          <Item
            Thumbnail={item.Thumbnail}
          />
        )}
        keyExtractor={item => item.id}
        horizontal

      />
    </View>
  )
}

export default EbookCard

const styles = StyleSheet.create({
  mainContainer: {
    height: 350,
    width: 330,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B3B3D',
    textAlign: 'left',
    marginTop: 10,
  },
  cardContainer: {
    width: 212,
    height: 270,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 10,
    elevation: 4,
    margin: 6
  },
  cardImage: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 20
  },
  bottomContainer: {
    width: 212,
    height: 62,
    borderRadius: 20,
    marginTop: 12,
    elevation: 4,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'

  }
  ,
  bottomText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B3B3D',
    textAlign: 'center',
    alignItems: 'center',
  }
})