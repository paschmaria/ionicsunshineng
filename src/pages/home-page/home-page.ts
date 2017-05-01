import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SunshineService } from './sunshine.service';


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html',
  providers: [SunshineService]
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private sunshineService : SunshineService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
