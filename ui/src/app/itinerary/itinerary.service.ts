import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItineraryService {
  public itinerary: any[] = [];
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
