import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type miniTaskProps = {
  task: string;
  status: boolean;
};

const MiniTask = (props: miniTaskProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(props.status);

  const toggleCheckBoxHandler = (newStatus: boolean) => {
    setToggleCheckBox(newStatus);
  }

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={toggleCheckBoxHandler}
      />
      <Text
        style={toggleCheckBox ? styles.textDone : styles.textNoDone}>
        {props.task}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textNoDone:{
    fontSize:16,
    color: 'black',
    textDecorationLine: 'none'  
  },
  textDone:{
    fontSize:16,
    fontStyle: 'italic',
    color: 'gray',
    textDecorationLine: 'line-through',
    textDecorationColor: 'gray',
  }
});

export default MiniTask;
