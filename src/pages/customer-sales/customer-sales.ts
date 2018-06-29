import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerSalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer-sales',
  templateUrl: 'customer-sales.html',
})
export class CustomerSalesPage {
  
  customer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerSalesPage');
  }

}
