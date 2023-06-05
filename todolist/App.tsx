/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import AddTask from './src/screens/AddTask';
import TaskView from './src/screens/TaskView';
import RootStackParamList from './src/types/RootStackParamList';

function App(): React.JSX.Element {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="AddTask"
          component={AddTask}
          options={{headerTitleAlign: 'center', title: 'Add a new task :D'}}
        />
        <RootStack.Screen name="TaskView" component={TaskView}
          options={{headerTitleAlign: 'center', title: 'Task details'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
