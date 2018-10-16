import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nasaUrlNext } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service3Service {

  nextDataSubject = new BehaviorSubject<{}>(null);

  constructor(private httpClient: HttpClient) {
    let self = this;

    setTimeout(function() {
      self.getNextAsteroidsData();
    }, 3000);
   }

  getNextAsteroidsData() {
    this.httpClient.get(nasaUrlNext).subscribe((data) => {
      this.nextDataSubject.next(data);
    });
  }
}
