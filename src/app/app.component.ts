import { Component, OnInit } from '@angular/core';
import { Service1Service } from './services/service1.service';
import { Service2Service } from './services/service2.service';
import { Service3Service } from './services/service3.service';
import { Observable, forkJoin, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vezba-razno';
  currentAsteroidsData: {};
  previousAsteroidsData: {};
  nextAsteroidsData: {};
  example;

  constructor(private service1: Service1Service, private service2: Service2Service, private service3: Service3Service) {
  }

  ngOnInit() {
    // this.service1.currentDataSubject.subscribe((currentData) => {
    //   this.currentAsteroidsData = currentData;
    // });
    // this.service2.previousDataSubject.subscribe((previousData) => {
    //   this.previousAsteroidsData = previousData;
    // });
    // this.service3.nextDataSubject.subscribe((nextData) => {
    //   this.nextAsteroidsData = nextData;
    // });

    // Promise.all([
    //     this.service1.currentDataSubject.toPromise(),
    //     this.service2.previousDataSubject.toPromise(),
    //     this.service3.nextDataSubject.toPromise()
    //   ]).then(val => {
    //     console.log('Promise.all Result:', val);
    //   });

      Promise.all([
        this.service1.currentDataSubject.toPromise(),
        this.service2.previousDataSubject.toPromise(),
        this.service3.nextDataSubject.toPromise()
      ]).then(value => console.log('Promise.all Result:', value));
    
    // combineLatest([
    //   this.service1.currentDataSubject,
    //   this.service2.previousDataSubject,
    //   this.service3.nextDataSubject
    // ]).subscribe((data) => {
    //   this.currentAsteroidsData = data[0];
    //   this.previousAsteroidsData = data[1];
    //   this.nextAsteroidsData = data[2];
    //   console.log('Promise.all Result:', data);
    // });

    // forkJoin([
    //   this.service1.currentDataSubject,
    //   this.service2.previousDataSubject,
    //   this.service3.nextDataSubject
    // ]).subscribe((data) => {
      
    //   console.log('Promise.all Result:', data);
    // });
  }
 









}
