import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import UserProfile from '../Components/UserProfile'
import SearchBar from '../Components/SearchBar'
import Badges from '../Components/Badges'
import RoadmapCard from '../Components/RoadmapCard'
import EbookCard from '../Components/EbookCard'

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        {/* Header */}
        <View style={styles.header}>
          {/* Text witch Greeting with Hey and the user name  */}
          <Text style={styles.headerGreetText}>Hey, Suraj👋</Text>
          {/* User Avatar */}
          <UserProfile />
        </View>

        {/* SearchBar */}
        <View style={styles.searchBoxContainer}>
          <SearchBar />
        </View>

        {/* Badges */}

        <View style={styles.Badges}>
          <Badges />
        </View>

        {/* Roadmap-Cards */}

        <View style={styles.RoadmapsContainer}>
          <RoadmapCard />
        </View>

        {/* E-books-cards */}
        <View style={styles.eBooksContainer}>
          <EbookCard />
        </View>
      </View>

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#F5FFF0',
    flex: 1,
    margin: 2,
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerGreetText: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    color: '#3B3B3D',
    lineHeight: 36,

  },
  searchBoxContainer: {
    margin: 3,
  }
  ,
  Badges: {
    marginTop: 20
  },
  RoadmapsContainer: {
    marginTop: 20
  },
  eBooksContainer: {
    margin: 3
  }
})