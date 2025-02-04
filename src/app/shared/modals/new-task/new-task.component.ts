import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TasksFormInterface } from '../../interfaces/tasks-form.interface';
import { TaskStatus } from '../../enums/task-status.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogClose,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent {
  public taskStatuses: TaskStatus[] = Object.values(TaskStatus);

  public readonly newTaskForm: FormGroup<TasksFormInterface> =
    new FormGroup<TasksFormInterface>({
      status: new FormControl(TaskStatus.OnHold),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });

  public create(): void {}
}
