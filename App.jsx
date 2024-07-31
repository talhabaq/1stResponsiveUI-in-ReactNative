import React from 'react'
import {View ,StyleSheet} from 'react-native'
const App=()=>{
  return(
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.innerbox1}></View>
        <View style={styles.innerbox2}></View>
        <View style={styles.innerbox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View> 
  )
}
const styles=StyleSheet.create(
{
    main:
    {
      flex:1,
    },
    box1:
    { flex:2,
      backgroundColor:"red",
      flexDirection:'row'
    },
    box2:
    { flex:1,
      backgroundColor:"green"
    },
    box3:{
      flex:1,
      backgroundColor:"blue"
    },
    innerbox1:{
      flex:1,
      backgroundColor:"skyblue",
      margin:10
    },
    innerbox2:{
      flex:1,
      backgroundColor:"blue",
      margin:10
    },
    innerbox3:{
      flex:1,
      backgroundColor:"orange",
      margin:10
    }
})
export default App
