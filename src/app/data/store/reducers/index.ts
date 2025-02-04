import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { TASKS_DATA_KEY, TasksDataState } from '../models/tasks.model';
import { tasksDataReducer } from './tasks.reducer';

export interface State {
  [TASKS_DATA_KEY]: TasksDataState;
}

export const reducers: ActionReducerMap<State> = {
  [TASKS_DATA_KEY]: tasksDataReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
