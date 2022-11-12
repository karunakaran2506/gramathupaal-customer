import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orderList: Array<any>;
  constructor(private apiservice: ApiService) {}

  ngOnInit() {
    this.orderList = this.apiservice.order;
  }
}
