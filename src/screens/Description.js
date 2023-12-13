import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

const Description = ({route}) => {
const{item} = route.params;//getting the item via routing so that description for the specific item could be shown
  return (
    <View style={styles.view} >
                <Image source={{ uri: item.image }} style={{ width: 210, height: 210 }} />

      <Text>Id for selected item {item.id}  </Text>
      <Text>Description for item id {item.id} {item.description}  </Text>
      <Text>Title  for item id {item.id} {item.title}  </Text>
      <Text>This page is for the detailed edscription for the clicked item</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    view:{
  margin: 20,
  borderWidth:1,
  padding:20,
  margin:40,
  alignItems:'center',
  gap:5
    }
  })

export default Description