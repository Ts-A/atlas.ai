import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  public loading: Boolean = false;
  public loadSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    this.loading
  );

  public start() {
    this.loading = true;
    this.loadSubject.next(this.loading);
  }

  public stop() {
    this.loading = false;
    this.loadSubject.next(this.loading);
  }
}
