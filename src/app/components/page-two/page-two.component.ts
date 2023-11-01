import {Component, OnInit} from '@angular/core';
import {DataPublisherService} from "../../services/data-publisher.service";

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  counter: number = 0;

  constructor(private dataPublisherService: DataPublisherService) {
  }

  ngOnInit(): void {
    //todo: unsubscribe method
    this.dataPublisherService.listenForData().subscribe((data) => {
      console.log(data);
      this.counter++;
      console.log(data);
    })
  }
}
