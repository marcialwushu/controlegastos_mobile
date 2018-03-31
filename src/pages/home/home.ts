import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: [];
  constructor(public navCtrl: NavController, public apiService: ApiProvider) {}

  ionViewDidLoad(){
    this.apiService.allUser().then(data => {
      this.users = data.data;
    });
  }

}
