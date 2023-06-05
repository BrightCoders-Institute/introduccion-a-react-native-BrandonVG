import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import RootStackParamList from '../types/RootStackParamList';
import taskItem from '../types/taskItem';
import TaskList from '../components/tasksList';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

function Home({route, navigation}: HomeScreenProps) {
  const [tasks, setTask] = useState<taskItem[]>([]);
  const pressTaskHandler = (task: taskItem) => {
    navigation.navigate('TaskView', {task});
  };
  const longPressTaskHandler = (task: taskItem) => {
    Alert.alert(
      'Delete task?',
      'Do you want to delete the task? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setTask(prevTasks => prevTasks.filter(t => t.id !== task.id));
          },
        },
      ],
    );
  };

  useEffect(() => {
    if (route.params?.task) {
      const newTask = route.params.task;
      setTask(prevTasks => [...prevTasks, newTask]);
      navigation.setParams({task: undefined});
    }
  }, [route.params?.task]);
  return (
    <View style={styles.container}>
      <TaskList
        tasks={tasks}
        onPressTask={pressTaskHandler}
        onLongPressTask={longPressTaskHandler}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('AddTask');
        }}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#0080ff',
    bottom: 10,
    borderRadius: 40,
    elevation: 5,
    height: 55,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    width: 55,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
