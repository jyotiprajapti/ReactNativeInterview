
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListOfItems from '../screens/ListOfItems'
import AddItemList from '../screens/AddItemList'
import Description from '../screens/Description'
import ApiMocking from '../screens/ApiMocking'


const Stack = createNativeStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ListOfItems' component={ListOfItems} />
        <Stack.Screen name='AddItemList' component={AddItemList} />
        <Stack.Screen name='Description' component={Description} />
        <Stack.Screen name='ApiMocking' component={ApiMocking} />

     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;//created separate file for routes to maintain code better