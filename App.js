import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Resources from './screens/Resources';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Mentorship from './screens/Mentorship';
import Loop from './screens/Loop';
import Guides from './screens/Guides';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




export default function App() {
  const { isActive, setIsActive } = useState(false);

  const handleOnPress = () => {
    setIsActive(true);
  }



  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1D262F',
            height: 60,
          },
          tabBarActiveTintColor: '#1EF2A6',
          tabBarInactiveTintColor: '#FFF',
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,

        }}
      >
        <Tab.Screen
          name="Home"
          onPress={handleOnPress}
          component={Home}
          options={{
            tabBarActiveTintColor: "#1ef2a6",
            tabBarInactiveTintColor: "#fff",
            tabBarIcon: ({ focused }) => <Entypo name="home" size={26} color={focused ? "#1EF2A6" : "#fff"} />

          }} />
        <Tab.Screen
          name='Resources'
          component={Resources}
          options={{
            tabBarActiveTintColor: "#1ef2a6",
            tabBarInactiveTintColor: "#fff",
            tabBarIcon: ({ focused }) => <AntDesign name="API" size={26} color={focused ? "#1EF2A6" : "#fff"} />
          }

          }

        />
         <Tab.Screen
          name='Loop'
          component={Loop}
          options={{
            tabBarActiveTintColor: "#1ef2a6",
            tabBarInactiveTintColor: "#fff",
            tabBarIcon: ({ focused }) => <AntDesign name="codesquare" size={26} color={focused ? "#1EF2A6" : "#fff"} />
          }

          }

        />
        <Tab.Screen
          name='Guides'
          component={Guides}
          options={{
            tabBarActiveTintColor: "#1ef2a6",
            tabBarInactiveTintColor: "#fff",
            tabBarIcon: ({ focused }) => <AntDesign name="book" size={26} color={focused ? "#1EF2A6" : "#fff"} />
          }

          }

        />
         <Tab.Screen
          name='Mentorship'
          component={Mentorship}
          options={{
            tabBarActiveTintColor: "#1ef2a6",
            tabBarInactiveTintColor: "#fff",
            tabBarIcon: ({ focused }) => <FontAwesome5 name="chalkboard-teacher" size={26} color={focused ? "#1ef2a6":"#fff"} />
          }

          }

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  fontDesign: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',

  }
});
