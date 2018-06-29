import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomerInformationPage } from '../customer-information/customer-information';
import { CustomerSalesPage } from '../customer-sales/customer-sales';

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  customer: any;
  customerInformationTab = CustomerInformationPage;
  customerSalesTab = CustomerSalesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
