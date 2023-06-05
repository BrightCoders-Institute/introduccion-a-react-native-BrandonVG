import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MiniTaskInput from '../components/miniTaskInput';
import Task from '../components/task';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StackScreenProps} from '@react-navigation/stack';
import miniTaskItem from '../types/miniTaskItem';
import RootStackParamList from '../types/RootStackParamList';
import taskItem from '../types/taskItem';

type addTaskScreenProps = StackScreenProps<RootStackParamList, 'AddTask'>;

function AddTask({navigation}: addTaskScreenProps) {
  const [title, setTitle] = useState('');
  const [miniTasks, setMiniTask] = useState<miniTaskItem[]>([]);
  const [color, setColor] = useState('#FFFFFF');
  const [topColor, setTopColor] = useState('#FFFFFF');

  const addMiniTask = (miniTaskText: string) => {
    if (miniTaskText !== '') {
      const newMinitask: miniTaskItem = {
        id: Math.random().toString(),
        task: miniTaskText,
        status: false,
      };
      setMiniTask(currentMiniTasks => [...currentMiniTasks, newMinitask]);
    } else {
      Alert.alert('Warning', "You can't add an empty task >:(");
    }
  };

  const addTaskHandler = () =>{
    const task:taskItem = {id:Math.random().toString(), title:title, backgroundColor: color, topBackgroundColor:topColor, miniTasks:miniTasks}
    navigation.navigate('Home',{task});
    
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          multiline
          style={styles.input}
          value={title}
          onChangeText={newValue => setTitle(newValue)}
          placeholder="Title for the task here :D"
          placeholderTextColor="#000000"
        />
        <MiniTaskInput onAddMiniTask={addMiniTask} />
      </View>
      <View>
        <Text style={styles.titleText}>Select the note color</Text>
      </View>
      <View style={styles.colorsBar}>
        <TouchableOpacity
          style={styles.colorGreen}
          onPress={() => {
            setColor('#6abf6c');
            setTopColor('#5BA95E');
          }}>
          {color === '#6abf6c' && (
            <FontAwesome5 name={'check'} size={25} color={'#000000'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorYellow}
          onPress={() => {
            setColor('#FDF495');
            setTopColor('#FFD573');
          }}>
          {color === '#FDF495' && (
            <FontAwesome5 name={'check'} size={25} color={'#000000'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorPink}
          onPress={() => {
            setColor('#F1668F');
            setTopColor('#C05172');
          }}>
          {color === '#F1668F' && (
            <FontAwesome5 name={'check'} size={25} color={'#000000'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorBlue}
          onPress={() => {
            setColor('#1ABBEF');
            setTopColor('#039BCD');
          }}>
          {color === '#1ABBEF' && (
            <FontAwesome5 name={'check'} size={25} color={'#000000'} />
          )}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={addTaskHandler}>
          <Text style={styles.btnText}>Add new task +</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskPreview}>
        <Task
          title={title}
          miniTasks={miniTasks}
          backgroundColor={color}
          topBackgroundColor={topColor} id={''} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 17,
    marginBottom: 20,
  },
  titleText: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  colorsBar: {
    flexDirection: 'row',
    height: 50,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#555555',
  },
  colorGreen: {
    borderTopWidth: 20,
    borderTopColor: '#5BA95E',
    flex: 1,
    backgroundColor: '#6abf6c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorYellow: {
    borderTopWidth: 20,
    borderTopColor: '#FFD573',
    flex: 1,
    backgroundColor: '#FDF495',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPink: {
    borderTopWidth: 20,
    borderTopColor: '#C05172',
    flex: 1,
    backgroundColor: '#F1668F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBlue: {
    borderTopWidth: 20,
    borderTopColor: '#039BCD',
    flex: 1,
    backgroundColor: '#1ABBEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#06d6a0',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  taskPreview:{
    flex:1,
    alignItems:'stretch',
  },
});

export default AddTask;
