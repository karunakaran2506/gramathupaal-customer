import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  subscriptionList: Array<any>;
  constructor(private apiservice: ApiService) {}

  ngOnInit() {
    this.subscriptionList = this.apiservice.subscription;
  }
}
