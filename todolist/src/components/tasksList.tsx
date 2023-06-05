import React from 'react';
import taskItem from '../types/taskItem';
import {FlatList, Pressable, View} from 'react-native';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

type taskListProps = {
  tasks: taskItem[];
  onPressTask: (task: taskItem) => any;
  onLongPressTask: (task: taskItem) => any;
};

const TaskList = (props: taskListProps) => {
  return (
    <View>
      <FlatList
        data={props.tasks}
        renderItem={({item}) => (
          <Pressable
            onPress={() => props.onPressTask(item)}
            onLongPress={() => props.onLongPressTask(item)}
            style={styles(item).note}>
            <Text style={styles(item).title}>{item.title}</Text>
            <Text style={styles(item).text}>
              There left{' '}
              <Text style={styles(props).taskCount}>
                {item.miniTasks.length}
              </Text>{' '}
              tasks to do
            </Text>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    note: {
      backgroundColor: props.backgroundColor,
      paddingBottom: 10,
      marginBottom: 30,
    },
    title: {
      backgroundColor: props.topBackgroundColor,
      color: '#000000',
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: '#000000',
    },
    taskCount: {
      fontWeight: 'bold',
    },
  });

export default TaskList;
