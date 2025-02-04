import { TaskInterface } from '../../../shared/interfaces/task.interface';

export const TASKS_DATA_KEY = 'tasksData';

export interface TasksDataState {
  tasks: TaskInterface[] | null;
  isLoading: boolean;
}

export enum TasksActions {
  InitTasks = 'InitTasks',
  GetTasks = 'GetTasks',
  SetTasks = 'SetTasks',
  MoveTask = 'MoveTask',
  CreateTask = 'CreateTask',
  RemoveTask = 'RemoveTask',
}
