import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { appTexts } from '../../constants/app-texts.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class HeaderComponent {
  public appTitle: string = appTexts.appTitle;
}
