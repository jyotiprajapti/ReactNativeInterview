import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { DataContext } from '../context/DataProvider';
import { useNavigation } from '@react-navigation/native';

function AddItemList() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const{items, setItem} = useContext(DataContext);
  const addItem = (newItem) => {
    setItem([...items, newItem]);
  };//Funcitonality to add item

const navigation = useNavigation();
  const handleSubmit = () => {
    addItem({ title:title, description:description, image:image });
    setTitle('');
    setDescription('');
    setImage('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={(text) => setImage(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})
export default AddItemList