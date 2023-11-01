import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataPublisherService {
  dataSubject = new ReplaySubject(5);

  constructor() { }

  publishData(data: any){
    this.dataSubject.next(data)
  }

  listenForData(){
    return this.dataSubject.asObservable();
  }
}
