import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

type miniTaskInputProps = {
  onAddMiniTask: (minitask: string) => any;
}

const MiniTaskInput = (props: miniTaskInputProps) =>{
  const [text, onChangeText] = useState('');
  const onPressHandler = () => {
    props.onAddMiniTask(text);
    onChangeText('');
  }

  return(
    <View style={styles.container}>
      <TextInput 
        multiline
        placeholder='Write a task here :D' 
        style={styles.input}
        onChangeText={value => onChangeText(value)}
        value={text}
      />
      <Pressable style={styles.btn} onPress={onPressHandler}>
        <Text style={styles.btnText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  input:{
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderRightWidth:0,
    borderWidth: 1,
    fontSize: 17,
    width: '85%',
  },
  btn:{
    alignItems: 'center',
    backgroundColor: "#06d6a0",
    justifyContent: 'center',
    width: '15%',
  },
  btnText:{
    color:'white',
    fontSize:20,
    fontWeight: '700',
  },
});

export default MiniTaskInput;