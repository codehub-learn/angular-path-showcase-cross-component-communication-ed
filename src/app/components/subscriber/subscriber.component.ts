import {Component, OnInit} from '@angular/core';
import {DataPublisherService} from "../../services/data-publisher.service";
import {first} from "rxjs";

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit{
  counter: number = 0

  constructor(private dataPublisherService: DataPublisherService) {
  }

  ngOnInit(): void {
    this.dataPublisherService.listenForData().subscribe((data) => {
      console.log(data);
    })
  }


}
