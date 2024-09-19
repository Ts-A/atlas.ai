import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MapContainerComponent } from '../map-container/map-container.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-itinerary-layout',
  standalone: true,
  imports: [SidebarComponent, MapContainerComponent],
  templateUrl: './itinerary-layout.component.html',
  styleUrl: './itinerary-layout.component.scss',
})
export class LayoutComponent {
  public sidebarVisible: boolean = false;
}
