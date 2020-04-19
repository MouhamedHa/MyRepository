import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Dimensions, TextInput,Image,Button, TouchableHighlight, TouchableOpacity, ToolbarAndroid } from 'react-native';

//Get Dimensions
const { height, width } = Dimensions.get('window');


export default function App() {
  return (
    <View style={styles.container}>
        <Image source= {{uri: 'https://i.pravatar.cc/150?u=838433638'}} style={styles.tinyLogo} /> 
        <TextInput style={styles.simpleInput} placeholder="Name"/>  
        <TextInput style={styles.simpleInput} placeholder="Phone number"/>
        <TextInput style={styles.simpleInput} placeholder="Adress"/>
        <TextInput style={styles.textAreaInput} 
                    placeholder="About me"
                    multiline={true}
                    numberOfLines={4}
                    />
       <TouchableOpacity style={styles.buttonSave} >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
    </View>
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
  tinyLogo:{
    height:100,
    width:100,
    borderRadius: 100 / 2
  },
  simpleInput:{
    width: width - 40,
    marginTop:30,
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal:10
  },
  textAreaInput:{
    width: width - 40,
    marginTop: 30,
    borderColor: 'pink',
    height: 100,
    borderWidth: 1,
    marginBottom:20,
    borderRadius:5,
    paddingHorizontal:10
  },
  buttonSave:{
    backgroundColor:'#FF80AB',
    borderRadius: 20,
    width:80,
    height: 40,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
    color:"#fff"
  }
});