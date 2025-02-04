import { createAction, props } from '@ngrx/store';
import { ReducerSections } from '../models/reducer';
import { TasksActions } from '../models/tasks.model';
import { TaskInterface } from '../../../shared/interfaces/task.interface';

export const initTasksAction = createAction(
  `${ReducerSections.TASKS} ${TasksActions.InitTasks}`
);

export const setTasksAction = createAction(
  `${ReducerSections.TASKS} ${TasksActions.SetTasks}`,
  props<{ tasks: TaskInterface[] }>()
);

export const createTaskAction = createAction(
  `${ReducerSections.TASKS} ${TasksActions.CreateTask}`,
  props<{ task: TaskInterface }>()
);

export const moveTaskAction = createAction(
  `${ReducerSections.TASKS} ${TasksActions.MoveTask}`,
  props<{ task: TaskInterface }>()
);
