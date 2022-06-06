import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy{

  constructor() { }

  sub!:Subscription
  sub2!:Subscription
  
  ngOnInit(): void {
    
    //this.sub = interval(1000).subscribe(numero => console.log(numero))
    
    const customInterval = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count)

        if(count > 30){
          observer.error('numero troppo elevato')
        }
        if(count == 20){
          observer.complete()
          console.log('fatto')
        }
        count ++;
      },1000)
    })
    this.sub2 = customInterval
    .pipe(
      filter((numero:any) => numero > 10),
      map((numero:any) => `Eseguito ${numero} volte`)
    )
    .subscribe(numero => console.log(numero))
  }
  
  ngOnDestroy(): void {
    //this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }



}
