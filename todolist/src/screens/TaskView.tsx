import React from 'react';
import {StyleSheet, View} from 'react-native';
import Task from '../components/task';
import { StackScreenProps } from '@react-navigation/stack';
import RootStackParamList from '../types/RootStackParamList';

type taskViewProps = StackScreenProps<RootStackParamList, 'TaskView'>;

function TaskView({route}: taskViewProps) {
  return (
    <View style={styles.container}>
      <Task id={route.params.task.id} title={route.params.task.title} backgroundColor={route.params.task.backgroundColor} topBackgroundColor={route.params.task.topBackgroundColor} miniTasks={route.params.task.miniTasks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:-18,
    flex:1,
  }
});


export default TaskView;
