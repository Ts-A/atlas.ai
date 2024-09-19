import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { FooterComponent } from './core/footer/footer.component';
// import { PromptWindowComponent } from './prompt-window/prompt-window.component';
import { HeaderComponent } from './core/header/header.component';
import { LayoutComponent } from './features/itinerary-planner/layout/itinerary-layout.component';
import { ProgressService } from './shared/services/progress/progress.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    LayoutComponent,
    CommonModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  public loading: Boolean = true;
  public loadingSubscription: Subscription | undefined;
  constructor(public progressSvc: ProgressService) {}

  ngOnInit() {
    this.loadingSubscription = this.progressSvc.loadSubject.subscribe(
      (l: Boolean) => {
        this.loading = l;
      }
    );
  }
}
