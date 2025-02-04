import { FormControl } from '@angular/forms';
import { TaskInterface } from './task.interface';

type FormControls<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

export interface TasksFormInterface extends FormControls<TaskInterface> {}
