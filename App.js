import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Dimensions, TextInput,Image,Button } from 'react-native';

//Get Dimensions
const { height, width } = Dimensions.get('window');


export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
        <Image source={require('./admin.jpg')} style={styles.img} />
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Phone Number" />
          <TextInput style={styles.input} placeholder="Address" />
          <TextInput style={styles.inputLong} placeholder="About me" /> 
        </View>
        <View style={styles.btn}>
          <Button title="Save" color="#d54255"/>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff'
  },
  img: {
    width: 150, 
    height: 150, 
    borderRadius: 400/ 2
  },
  card: {
  backgroundColor: '#fff',
  flex: 4,
  width: width - 25,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  ...Platform.select({
    ios: {
      shadowColor: 'rgb(50,50,50)',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {
        height: -1,
        width: 0
      }
    },
    android: {
      elevation: 15
    }
  })
},
  btn: {
    marginTop: 40,
    marginBottom: 30,
    flex: 1,
    width: 150,
    borderRadius: 400/ 2
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
input: {
  padding: 20,
  borderBottomColor: '#bbb',
  borderBottomWidth: 1,
  fontSize: 24
},
inputLong: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    height: 75
  },

input: {
  padding: 20,
  borderBottomColor: '#bbb',
  borderBottomWidth: 1,
  fontSize: 24
}
});