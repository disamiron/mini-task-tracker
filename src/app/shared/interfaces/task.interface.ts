import { TaskStatus } from '../enums/task-status.enum';

export interface TaskInterface {
  status: TaskStatus;
  title: string;
  description: string | null;
}
