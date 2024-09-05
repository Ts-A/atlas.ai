import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import {
  Icon,
  icon,
  latLng,
  Layer,
  Map,
  MapOptions,
  marker,
  tileLayer,
} from 'leaflet';
import { NgxPlaceholderComponent } from 'ngx-placeholder';
import { Subscription } from 'rxjs';
import { ItineraryService } from '../itinerary/itinerary.service';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [NgxPlaceholderComponent, LeafletModule],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapContainerComponent {
  public mapOptions: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }),
    ],
    zoom: 5,
    center: latLng(21.248422235627014, 77.56347656250001),
  };
  public itinerary: any[] = [];
  public layers: Layer[] = [];
  public itrSubscription: Subscription | undefined;

  constructor(public itinerarySvc: ItineraryService) {}

  public onMapReady(map: Map) {
    this.itrSubscription = this.itinerarySvc.itrSubject.subscribe(
      (itr: any) => {
        this.itinerary = itr;
        this.updateMap();
      }
    );
  }

  public updateMap() {
    const markers = this.itinerary.map((item: any) => {
      return marker(latLng(item.latitude, item.longitude), {
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png',
        }),
        title: item.name,
      });
    });
    this.layers.splice(0, this.layers.length);
    this.layers.push(...markers);
  }
}
