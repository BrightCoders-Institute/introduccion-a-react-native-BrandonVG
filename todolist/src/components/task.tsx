import React, { useState } from 'react';
import MiniTask from './miniTask';
import { FlatList, StyleSheet, Text, View } from 'react-native';



const Task = (props: taskItem) =>{
  return (
    <View style={{marginTop:20, backgroundColor:props.backgroundColor}}>
      <Text style={{
        backgroundColor: props.topBackgroundColor,
        color: '#000000',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:15,
      }} >{props.title}</Text>
      <FlatList 
          data={props.miniTasks}
          renderItem={({item}) => <MiniTask task={item.task} status={item.status}/>}
          keyExtractor={item => item.id}
        />
    </View>
  )
}


export default Task;