import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nasaUrlCurrent } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  currentDataSubject = new BehaviorSubject<{}>(null);

  constructor(private httpClient: HttpClient) {
    this.getCurrentAsteroidsData();
   }

  getCurrentAsteroidsData() {
    this.httpClient.get(nasaUrlCurrent).subscribe((data) => {
      this.currentDataSubject.next(data);
    });
  }
}
