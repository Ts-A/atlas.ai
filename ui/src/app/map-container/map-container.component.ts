import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import {
  Icon,
  icon,
  LatLng,
  latLng,
  Layer,
  Map,
  MapOptions,
  marker,
  tileLayer,
} from 'leaflet';
import { NgxPlaceholderComponent } from 'ngx-placeholder';
import { Subscription } from 'rxjs';
import { Itinerary } from '../itinerary/itinerary.interace';
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
  public map: Map | undefined;
  public mapZoom: number = 5;
  public mapCenter: LatLng = latLng([21.248422235627014, 77.56347656250001]);
  public mapOptions: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 4,
      }),
    ],
  };
  public itinerary: any[] = [];
  public layers: Layer[] = [];
  public itrSubscription: Subscription | undefined;
  public initialLoad: boolean = true;

  constructor(public itinerarySvc: ItineraryService) {}

  public onMapReady(map: Map) {
    this.map = map;
    this.itrSubscription = this.itinerarySvc.itrSubject.subscribe(
      (itr: any) => {
        this.itinerary = itr;
        if (!this.initialLoad) this.updateMap();
        this.initialLoad = false;
      }
    );
  }

  public updateMap() {
    const markers = this.itinerary.map((item: Itinerary, index: Number) => {
      return marker(latLng(item.latitude, item.longitude), {
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png',
        }),
        title: item.name,
      }).bindPopup(
        `<div style="text-align: center; font-weight: bold;">${item.name}</div><div>${item.description}</div>`
      );
    });
    this.layers.push(...markers);
    this.mapZoom = 8;
    this.mapCenter = latLng(markers[0].getLatLng());
  }
}
