import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASKS_DATA_KEY, TasksDataState } from '../models/tasks.model';

export const selectFeature =
  createFeatureSelector<TasksDataState>(TASKS_DATA_KEY);

export const selectTasks = createSelector(
  selectFeature,
  (state: TasksDataState) => state.tasks
);

export const selectTasksIsLoading = createSelector(
  selectFeature,
  (state: TasksDataState) => state.isLoading
);
