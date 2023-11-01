import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataPublisherService {
  dataSubject = new Subject();
  constructor() { }

  publishData(data: any){
    this.dataSubject.next(data)
  }

  listenForData(){
    return this.dataSubject.asObservable();
  }
}
