import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nasaUrlPrevious } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  previousDataSubject = new BehaviorSubject<{}>(null);

  constructor(private httpClient: HttpClient) {
    this.getPreviousAsteroidsData();
   }

  getPreviousAsteroidsData() {
    this.httpClient.get(nasaUrlPrevious).subscribe((data) => {
      this.previousDataSubject.next(data);
    });
  }
}
