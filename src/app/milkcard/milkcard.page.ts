import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-milkcard',
  templateUrl: './milkcard.page.html',
  styleUrls: ['./milkcard.page.scss'],
})
export class MilkcardPage implements OnInit {

  milkcardList: Array<any>;
  constructor(private apiservice: ApiService) {}

  ngOnInit() {
    this.milkcardList = this.apiservice.milkcard;
  }
}
