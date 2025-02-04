import { createReducer, on } from '@ngrx/store';
import { TasksDataState } from '../models/tasks.model';
import { initTasksAction, setTasksAction } from '../actions/tasks.actions';
import { TaskInterface } from '../../../shared/interfaces/task.interface';

const initialState: TasksDataState = {
  tasks: null,
  isLoading: true,
};

export const tasksDataReducer = createReducer(
  initialState,
  on(
    initTasksAction,
    (state: TasksDataState): TasksDataState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    setTasksAction,
    (
      _,
      action: {
        tasks: TaskInterface[];
      }
    ): TasksDataState => ({
      tasks: action.tasks,
      isLoading: false,
    })
  )
);
