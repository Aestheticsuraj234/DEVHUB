import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const UserProfile = () => {
  return (
    <View style={styles.ProfileImageContainer}>
      <Image
        style={styles.profilePic}
        source={require('../assets/Profile.png')}
      />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  ProfileImageContainer: {
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 7,
    elevation: 12,
    borderRadius: 48,
  }
  ,
  profilePic: {
    width: 50,
    height:50,
    borderRadius: 50.1277,
  }
})