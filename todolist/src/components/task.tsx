import React from 'react';
import MiniTask from './miniTask';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import taskItem from '../types/taskItem';

const Task = (props: taskItem) => {
  return (
    <View style={styles(props).container}>
      <Text style={styles(props).title}>{props.title}</Text>
      <FlatList
        data={props.miniTasks}
        renderItem={({item}) => (
          <MiniTask task={item.task} status={item.status} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
      backgroundColor: props.backgroundColor,
      flex: 1,
    },
    title: {
      backgroundColor: props.topBackgroundColor,
      color: '#000000',
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
    },
  });

export default Task;
