// App.js
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextBase, View } from 'react-native';
import axios from 'react-native-axios'

const ApiMocking = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setItems(response.data);
    });
  }, []);//UseEffect with empty array dependancy is used to optimise the rerendering of component hence optimising performance

  console.log("mocked data ", items)
  return(
    <View style= {styles.view} >
        <Text style = {styles.title} >Usig fetched data to render in a list</Text>
      <FlatList data={items}//using fetched data in a list
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <View><Text style={styles.text}>{item.name}</Text></View>
        )}/>
    </View>
  )
};

const styles = StyleSheet.create({
    view:{
  margin: 20,
  fontSize:30,
  marging:30,
  padding:20,
  gap:7
    },
    text:{
        fontSize:30
    },
    title:{
        fontSize:35,
        fontWeight:'bold'
    }
  })
  

export default ApiMocking;
