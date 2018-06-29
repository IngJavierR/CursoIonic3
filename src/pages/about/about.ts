import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';
import { CustomersApiProvider } from '../../providers/customers-api/customers-api';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  /*customers: any[] = [
    {id: 1, name: 'At&t'},
    {id: 2, name: 'Roga'},
    {id: 3, name: 'RHTotal'}
  ];*/

  customers: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public customerApi: CustomersApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.customerApi.getCustomers().subscribe(x => this.customers = x);
  }

  goToCustomer($event, customer) {
    this.navCtrl.push(CustomerPage, customer);
  }

}
