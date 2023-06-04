import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TaskForm from "../components/taskForm";




function AddTask(){
  return(
    <View style={styles.container}>
      <TaskForm />
    </View>
    // Preview Task
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  }
})

export default AddTask;