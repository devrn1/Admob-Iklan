/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import HomeScreen from './Component';

const App = () =>{

  const [box, setBox] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setBox(true)
    },3000)
  },[])

  return box === false ? <LandingPage/> : <HomeScreen/>
}

const LandingPage = () => {
  return(
    <View style={Styles.box}>
      <View style={Styles.boxRow}>
        <Image style={Styles.img} source={require("./Component/Asset/mining.png")}/>
        <View>
          <Text style={Styles.Text1}>Admob Maining</Text>
          <Text style={Styles.Text2}>Kerja cerdas bagai Tomas...</Text>
        </View>
      </View>
    </View>
  )
}

const {width, height} = Dimensions.get("window")

const Styles = StyleSheet.create({
  box:{
    width:width,
    height:height,
    flex:1,
    backgroundColor:'#00BFFF',
    justifyContent:"flex-end",
    alignItems:"center",
    paddingBottom:height / 18
  },
  boxRow:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"flex-end"
  },
  img:{
    width:width / 7,
    height:height / 14,
    marginRight:width / 55
  },
  Text1:{
    fontSize:height / 40,
    color:"black",
    fontWeight:'bold'
  },
  Text2:{
    fontSize:height / 50,
    color:"black",
    paddingBottom:height / 500
  }
})

export default App;
