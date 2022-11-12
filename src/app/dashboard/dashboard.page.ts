import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  tokenLength: number = 0;
  milkcardLength: number = 0;
  subscriptionLength: number = 0;
  orderLength: number = 0;
  customer: any;

  constructor(
    private apiservice: ApiService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const payload = { customer: localStorage.getItem('id') };
    this.customer = JSON.parse(localStorage.getItem('customer'));
    this.apiservice.listCustomerProductToken(payload).subscribe((data: any) => {
      if (data.success) {
        this.tokenLength = data?.token?.length;
        this.apiservice.token = data?.token;
      } else {
        this.presenttoast(data.message);
      }
    });
    this.apiservice.customerMilkcard(payload).subscribe((data: any) => {
      if (data.success) {
        this.milkcardLength = data?.entry?.length;
        this.apiservice.milkcard = data?.entry;
      } else {
        this.presenttoast(data.message);
      }
    });
    this.apiservice.listActiveSubscription(payload).subscribe((data: any) => {
      if (data.success) {
        this.subscriptionLength = data?.order?.length;
        this.apiservice.subscription = data?.order;
      } else {
        this.presenttoast(data.message);
      }
    });
    this.apiservice.listOrdersbyCustomer(payload).subscribe((data: any) => {
      if (data.success) {
        this.orderLength = data?.orders?.length;
        this.apiservice.order = data?.orders;
      } else {
        this.presenttoast(data.message);
      }
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Are your sure to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Yes',
          handler: () => {
            localStorage.clear();
            this.navCtrl.navigateRoot('/home');
          },
        },
      ],
    });
    await alert.present();
  }

  async presenttoast(txt) {
    const toast = await this.toastCtrl.create({
      message: txt,
      duration: 2500,
    });
    toast.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete(this.ngOnInit());
    }, 2000);
  }

  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }
}
