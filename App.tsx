import { View, Text } from 'react-native'
import React from 'react'
import ListOfItems from './src/screens/ListOfItems'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddItemList from './src/screens/AddItemList'
import Routes from './src/routes/Routes'
import DataProvider from './src/context/DataProvider'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <DataProvider><Routes/></DataProvider>//created separate file for routes to maintain code better
  )
}

export default App