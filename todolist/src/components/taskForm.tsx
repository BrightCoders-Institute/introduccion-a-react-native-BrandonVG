import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, TextInput, View, Text } from "react-native";
import MiniTaskInput from "./miniTaskInput";
import Task from "./task";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type taskFormProps = {

}

const TaskForm = (props: taskFormProps) =>{
  const [title, setTitle] = useState('');
  const [miniTasks, setMiniTask] = useState<miniTaskItem[]>([])
  const [color, setColor] = useState('#FFFFFF');
  const [topColor, setTopColor] = useState('#FFFFFF');

  const addMiniTask = (miniTaskText: string) => {
    if (miniTaskText != ''){
      const newMinitask: miniTaskItem ={
        id: Math.random().toString(),
        task: miniTaskText,
        status: false,
      }
      setMiniTask(currentMiniTasks => [...currentMiniTasks, newMinitask]);
    }
    else{
      Alert.alert('Warning',"You can't add an empty task >:(")
    }
  }
  return(
    <View style={styles.container}>
      <View>
        <TextInput 
          multiline
          style={styles.input} 
          value={title}
          onChangeText={newValue => setTitle(newValue)}
          placeholder="Title for the task here :D"
        />
        <MiniTaskInput onAddMiniTask={addMiniTask}/>
      </View>
      <View>
        <Text style={styles.titleText}>Select the note color n.n</Text>
      </View>
      <View style={styles.colorsBar} >
        <TouchableOpacity 
          style={styles.colorGreen}
          onPress={() => {setColor('#6abf6c'); setTopColor('#5BA95E');}}
        >
          {color === '#6abf6c' &&
            <FontAwesome5 
              name={'check'}
              size={25}
              color={'#000000'}
            />
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorYellow}
          onPress={() => {setColor('#FDF495'); setTopColor('#FFD573');}}
        >
          {color === '#FDF495' &&
            <FontAwesome5 
              name={'check'}
              size={25}
              color={'#000000'}
            />
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorPink}
          onPress={() => {setColor('#F1668F'); setTopColor('#C05172');}}
        >
          {color === '#F1668F' &&
            <FontAwesome5 
              name={'check'}
              size={25}
              color={'#000000'}
            />
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorBlue}
          onPress={() => {setColor('#1ABBEF'); setTopColor('#039BCD');}}
        >
          {color === '#1ABBEF' &&
            <FontAwesome5 
              name={'check'}
              size={25}
              color={'#000000'}
            />
          }
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add new task +</Text>
        </TouchableOpacity>
      </View>
      <View>  
        <Task title={title} miniTasks={miniTasks} backgroundColor={color} topBackgroundColor={topColor}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 17,
    marginBottom:20,
  },
  titleText:{
    marginTop: 20,
    marginBottom: 20,
    fontSize:20,
    color:'black',
    textAlign: 'center',
  },
  colorsBar:{
    flexDirection:'row',
    height:50,
    marginVertical:10,
    borderWidth:2,
    borderRadius:10,
    borderColor:'#555555',
  },
  colorGreen:{
    borderTopWidth:20,
    borderTopColor:'#5BA95E',
    flex:1,
    backgroundColor:'#6abf6c',
    justifyContent:'center',
    alignItems:'center'
  },
  colorYellow:{
    borderTopWidth:20,
    borderTopColor:'#FFD573',
    flex:1,
    backgroundColor:'#FDF495',
    justifyContent:'center',
    alignItems:'center'
  },
  colorPink:{
    borderTopWidth:20,
    borderTopColor:'#C05172',
    flex:1,
    backgroundColor:'#F1668F',
    justifyContent:'center',
    alignItems:'center'
  },
  colorBlue:{
    borderTopWidth:20,
    borderTopColor:'#039BCD',
    flex:1,
    backgroundColor:'#1ABBEF',
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    backgroundColor:'#06d6a0',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:4,
  },
  btnText:{
    color:'#FFFFFF',
    fontSize:16,
  },
});

export default TaskForm;