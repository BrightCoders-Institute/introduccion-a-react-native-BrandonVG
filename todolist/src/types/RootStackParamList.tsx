import taskItem from './taskItem';

type RootStackParamList = {
  Home: {task: taskItem} | undefined;
  AddTask: {task: taskItem} | undefined;
  TaskView: {task: taskItem};
};

export default RootStackParamList;
