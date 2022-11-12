import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  isDisabled: boolean = false;
  customer: any;

  editProfileForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem('customer'));
    this.editProfileForm = new FormGroup({
      user: new FormControl(this.customer?._id),
      name: new FormControl(this.customer?.name, Validators.required),
      phone: new FormControl(
        { value: this.customer?.phone, disabled : true},
        Validators.required
      ),
      email: new FormControl(this.customer?.email, Validators.email),
    });
  }

  validation_messages = {
    name: [{ type: 'required', message: 'Name is required' }],
    phone: [{ type: 'required', message: 'Phone Number is required' }],
    email: [
      { type: 'email', message: 'Incorrect email' },
    ],
  };

  onSubmit(value) {
    if (this.editProfileForm.status === 'VALID') {
      this.apiservice.editProfile(value).subscribe((data: any) => {
        if (data.success) {
          localStorage.setItem('customer', JSON.stringify(data?.customer));
          this.navCtrl.navigateForward('/dashboard');
          this.presenttoast(data.message);
        } else {
          this.presenttoast(data.message);
        }
        this.isDisabled = false;
      });
    } else {
      this.presenttoast('Enter all valid inputs');
      this.isDisabled = false;
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
