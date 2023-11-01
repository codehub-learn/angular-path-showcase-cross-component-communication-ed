import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataPublisherService} from "../../services/data-publisher.service";
import {first, Subscription} from "rxjs";

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit, OnDestroy{
  counter: number = 0
  private dataPublisherSubscription?: Subscription;

  constructor(private dataPublisherService: DataPublisherService) {
  }

  ngOnInit(): void {
    this.dataPublisherSubscription = this.dataPublisherService.listenForData().subscribe((data) => {
      this.counter++;
    });
  }

  ngOnDestroy(): void {
    this.dataPublisherSubscription?.unsubscribe();
  }
}
