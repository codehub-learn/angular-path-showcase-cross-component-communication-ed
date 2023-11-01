import { Component } from '@angular/core';
import {DataPublisherService} from "../../services/data-publisher.service";

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent {

  constructor(private dataPublisherService: DataPublisherService) {
  }

  publishClicking() {
    this.dataPublisherService.publishData("Button Clicked");
  }
}
