import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.page.html',
  styleUrls: ['./tokens.page.scss'],
})
export class TokensPage implements OnInit {

  tokenList: Array<any>;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.tokenList = this.apiservice.token;
  }

}
