/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import AddTask from './src/screens/AddTask';
import TaskView from './src/screens/TaskView';


function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  // const addMiniTask = (miniTaskText: string) => {
  //   const [miniTasks, setMiniTask] = useState<miniTaskItem[]>([])
  //   const newMiniTask: miniTaskItem = {
  //     id: Math.random().toString(),
  //     task: miniTaskText,
  //     status: false,
  //   };
  
  //   if (newMiniTask.status) {
  //     setMiniTask((currentMiniTasks) => [...currentMiniTasks, newMiniTask]);
  //   } else {
  //     setMiniTask((currentMiniTasks) => [newMiniTask, ...currentMiniTasks]);
  //   }
  // };

  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Home}
          options={{headerShown:false}}
          />
         <Stack.Screen name="AddTask" component={AddTask}
          options={{headerTitleAlign:'center', title:'Add a new task :D'}}
         />
         <Stack.Screen name="TaskView" component={TaskView}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;
