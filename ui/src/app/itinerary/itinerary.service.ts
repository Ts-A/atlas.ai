import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItineraryService {
  public itinerary: any[] = [
    {
      latitude: 18.5204,
      longitude: 73.8567,
      name: 'Pune',
      description: 'Start your journey from Pune.',
    },
    {
      latitude: 31.634,
      longitude: 77.0925,
      name: 'Manali',
      description:
        'Reach Manali, explore the charming town and enjoy the scenic beauty of the Himalayas.',
    },
    {
      latitude: 31.64,
      longitude: 77.18,
      name: 'Hidimba Devi Temple',
      description:
        'Visit this ancient temple dedicated to Hidimba Devi, wife of Bhima from the Hindu epic Mahabharata.',
    },
    {
      latitude: 31.636,
      longitude: 77.169,
      name: 'Vashisht Hot Springs',
      description:
        'Relax and rejuvenate in the natural hot springs of Vashisht.',
    },
    {
      latitude: 31.641,
      longitude: 77.17,
      name: 'Club House',
      description:
        'Enjoy the breathtaking views of the mountains from the Club House.',
    },
    {
      latitude: 31.761,
      longitude: 77.134,
      name: 'Solang Valley',
      description:
        'Experience adventure activities like paragliding, zorbing, and skiing in Solang Valley.',
    },
    {
      latitude: 31.819,
      longitude: 77.099,
      name: 'Rohtang Pass',
      description:
        'Embark on a scenic drive to the Rohtang Pass, a high mountain pass offering stunning panoramic views.',
    },
    {
      latitude: 31.633,
      longitude: 77.178,
      name: 'Old Manali',
      description:
        'Explore the charming and traditional village of Old Manali, known for its peaceful ambiance.',
    },
    {
      latitude: 31.636,
      longitude: 77.169,
      name: 'Beas River',
      description:
        'Enjoy a leisurely stroll along the banks of the Beas River, taking in the scenic beauty.',
    },
    {
      latitude: 18.5204,
      longitude: 73.8567,
      name: 'Pune',
      description: 'Depart from Manali and return to Pune.',
    },
  ];
  public itrSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    this.itinerary
  );

  constructor() {}

  public updateItinerary(itinerary: any[]) {
    console.log(itinerary);
    this.itinerary = itinerary;
    this.itrSubject.next(this.itinerary);
  }
}
