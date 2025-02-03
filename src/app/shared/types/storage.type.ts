export interface Storage<T> {
    type: StorageType;
    value?: T;
  }
  
  export enum StorageType {
    tasks = 'MINI_TASK_TRACKER_TASKS',
  }