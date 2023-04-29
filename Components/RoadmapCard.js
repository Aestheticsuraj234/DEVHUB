import { StyleSheet, Text, View, TouchableOpacity, Image , FlatList } from 'react-native'
import React from 'react'
import { RoadMapData } from '../constants/RoadMaps/RoadMaps'

const Item = ({name , image , color})=>{

    return(
      <TouchableOpacity style={styles.cardContainer}>
      <Image source={image} />
      <View style={[styles.bottomContainer , {backgroundColor:color}]}>
        <Text style={styles.bottomText}>{name}</Text>
      </View>
    </TouchableOpacity>
    )
     
 
}


const RoadmapCard = () => {
  return (
  <View style={styles.mainContainer} >
      <Text style={styles.heading}>Roadmaps</Text>
    <FlatList
     data={RoadMapData}
     renderItem={({item}) => (
       <Item 
        name={item.name} 
        image={item.image}
        color={item.color}
       />
     )}
     keyExtractor={item => item.id}
     horizontal
    
    />
  </View>
  )
}

export default RoadmapCard

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
    borderTopWidth: 6,
    borderTopColor: '#1d242f',
    margin:6

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
    display:'flex',
    justifyContent:'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B3B3D',
    textAlign: 'center',
    alignItems:'center',
  }
})