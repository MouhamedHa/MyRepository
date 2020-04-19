import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 


class MyItems extends React.Component{
    render(){
        const items = this.props.myData
        return(
            <View style={styles.container}>
                <Image source= {{uri: items.uri}} style={styles.tinyLogo} />
                <Text style={styles.name_txt}>{items.name}</Text>
                <Icon name="delete" color="pink" size={30} />
            </View>
        );
    }
}
export default function App() {
    const myData = [
        {
           id:1,
           name:"Awa",
           uri: 'https://i.pravatar.cc/150?u=838433638'
        },
        {
           id:2,
           name:"Maxim",
           uri: 'https://i.pravatar.cc/150?u=838434638'
        },
        {
           id:3,
           name:"Fatou",
           uri: 'https://i.pravatar.cc/150?u=838434636'
        },
        {
           id:4,
           name:"Albert",
           uri: 'https://i.pravatar.cc/150?u=838434634'
        },
        {
           id:5,
           name:"Alphonse",
           uri: 'https://i.pravatar.cc/150?u=838434633'
        }
     ]
    return (
       

        <FlatList
            data={myData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <MyItems myData={item}/>}
        />

    );
  }


const styles = StyleSheet.create({
   container: {
    paddingTop: 20,
    paddingLeft:10,
    marginTop:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:'grey'
  },
  tinyLogo:{
    height:80,
    width:80,
    borderRadius: 100 / 2
  },
  name_txt: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft:40,
    color:'grey'
  },
  
})