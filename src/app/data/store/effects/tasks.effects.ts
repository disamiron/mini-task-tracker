import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { StorageService } from '../../../shared/services/storage.service';
import { initTasksAction, setTasksAction } from '../actions/tasks.actions';
import { TaskInterface } from '../../../shared/interfaces/task.interface';
import { StorageType } from '../../../shared/types/storage.type';

@Injectable()
export class TasksEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService
  ) {}

  public initTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initTasksAction),
      map(() => {
        const tasks: TaskInterface[] =
          this.storageService.getItem(StorageType.tasks) ?? [];
        console.log(tasks);
        return setTasksAction({ tasks: tasks });
      })
    );
  });
}
