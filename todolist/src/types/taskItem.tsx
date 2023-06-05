import miniTaskItem from './miniTaskItem';

type taskItem = {
  id: string;
  title: string;
  backgroundColor: string;
  topBackgroundColor: string;
  miniTasks: miniTaskItem[];
};

export default taskItem;
