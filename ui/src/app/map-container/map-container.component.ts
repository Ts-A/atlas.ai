import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Icon, icon, latLng, marker, tileLayer } from 'leaflet';
import { NgxPlaceholderComponent } from 'ngx-placeholder';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [NgxPlaceholderComponent, LeafletModule],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapContainerComponent {
  public options: any = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }),
    ],
    zoom: 5,
    center: latLng(21.248422235627014, 77.56347656250001),
  };
  public layer = [
    marker([21.248422235627014, 77.56347656250001], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png',
      }),
    }),
    marker([22.248422235627014, 75.56347656250001], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png',
      }),
    }),
  ];
  public handleClick = (e: any) => {
    console.log(e);
  };
}
