import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm: FormGroup;
  hide: Boolean = false;

  constructor(
    private apiservice: ApiService,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      phone: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      password: new FormControl('', Validators.required),
    });
  }

  validation_messages = {
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'minLength', message: 'Enter valid phone number' },
      { type: 'maxLength', message: 'Enter valid phone number' },
    ],
    password: [{ type: 'required', message: 'Password is required' }],
  };

  onSubmit(value) {
    if (this.loginForm.status === 'VALID') {
      this.apiservice.userLogin(value).subscribe((data: any) => {
        if (data.success) {
          this.presenttoast(data.message);
          localStorage.setItem('token', data?.token);
          localStorage.setItem('store', data?.user?.store);
          localStorage.setItem('id', data?.user?.id);
          localStorage.setItem('customer', JSON.stringify(data?.user));
          this.navCtrl.navigateForward('dashboard');
        } else {
          this.presenttoast(data.message);
        }
      });
    } else {
      this.presenttoast('Provide all valid values');
    }
  }

  async presenttoast(txt) {
    const toast = await this.toastCtrl.create({
      message: txt,
      duration: 2500,
    });
    toast.present();
  }
}
