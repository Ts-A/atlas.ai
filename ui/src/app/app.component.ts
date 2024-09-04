import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';
import { NgxPlaceholderComponent } from 'ngx-placeholder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxPlaceholderComponent, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
