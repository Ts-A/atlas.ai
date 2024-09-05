import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Icon, icon, latLng, Map, marker, tileLayer } from 'leaflet';
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

  public itinerary: any = [
    {
      latitude: 18.5204,
      longitude: 73.8567,
      name: 'Pune',
      description: 'Start your journey from Pune.',
      startDay: 1,
      endDay: 1,
    },
    {
      latitude: 31.634,
      longitude: 77.0925,
      name: 'Manali',
      description:
        'Reach Manali, explore the charming town and enjoy the scenic beauty of the Himalayas.',
      startDay: 2,
      endDay: 5,
    },
    {
      latitude: 31.64,
      longitude: 77.18,
      name: 'Hidimba Devi Temple',
      description:
        'Visit this ancient temple dedicated to Hidimba Devi, wife of Bhima from the Hindu epic Mahabharata.',
      startDay: 2,
      endDay: 2,
    },
    {
      latitude: 31.636,
      longitude: 77.169,
      name: 'Vashisht Hot Springs',
      description:
        'Relax and rejuvenate in the natural hot springs of Vashisht.',
      startDay: 2,
      endDay: 2,
    },
    {
      latitude: 31.641,
      longitude: 77.17,
      name: 'Club House',
      description:
        'Enjoy the breathtaking views of the mountains from the Club House.',
      startDay: 3,
      endDay: 3,
    },
    {
      latitude: 31.761,
      longitude: 77.134,
      name: 'Solang Valley',
      description:
        'Experience adventure activities like paragliding, zorbing, and skiing in Solang Valley.',
      startDay: 3,
      endDay: 3,
    },
    {
      latitude: 31.819,
      longitude: 77.099,
      name: 'Rohtang Pass',
      description:
        'Embark on a scenic drive to the Rohtang Pass, a high mountain pass offering stunning panoramic views.',
      startDay: 4,
      endDay: 4,
    },
    {
      latitude: 31.633,
      longitude: 77.178,
      name: 'Old Manali',
      description:
        'Explore the charming and traditional village of Old Manali, known for its peaceful ambiance.',
      startDay: 4,
      endDay: 4,
    },
    {
      latitude: 31.636,
      longitude: 77.169,
      name: 'Beas River',
      description:
        'Enjoy a leisurely stroll along the banks of the Beas River, taking in the scenic beauty.',
      startDay: 5,
      endDay: 5,
    },
    {
      latitude: 18.5204,
      longitude: 73.8567,
      name: 'Pune',
      description: 'Depart from Manali and return to Pune.',
      startDay: 5,
      endDay: 5,
    },
  ];
  public layer: any = [];

  public onMapReady(map: Map) {
    const markers = this.itinerary.map((item: any) => {
      return marker(latLng(item.latitude, item.longitude), {
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png',
        }),
        title: item.name,
      }).bindPopup(`<p>${item.description}</p>`);
    });
    console.log(map);
    this.layer.push(...markers);
  }
}
