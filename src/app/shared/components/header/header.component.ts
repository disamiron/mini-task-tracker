import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { appTexts } from '../../constants/app-texts.const';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewTaskComponent } from '../../modals/new-task/new-task.component';
import { TaskInterface } from '../../interfaces/task.interface';
import { filter } from 'rxjs';
import { Store } from '@ngrx/store';
import { createTaskAction } from '../../../data/store/actions/tasks.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatButtonModule, MatDialogModule, MatDividerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public appTitle: string = appTexts.appTitle;

  constructor(private dialog: MatDialog, private store: Store) {}

  public openNewTaskModal() {
    this.dialog
      .open(NewTaskComponent)
      .afterClosed()
      .pipe(filter((task: TaskInterface | undefined) => !!task))
      .subscribe((task: TaskInterface) => {
        this.store.dispatch(createTaskAction({ task }));
      });
  }
}
