import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InputPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
class InputItem{
  name: string;
  description: string;
  value: any;
  imageLink: string;

  constructor(name: string, description: string, imageLink: string){
    this.name = name;
    this.description = description;
    this.imageLink = imageLink;    
  }
}

@IonicPage()
@Component({
  selector: 'page-input-page',
  templateUrl: 'input-page.html',
})
export class InputPage {

  inputItems: InputItem[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // system capacity, azimuth, tilt, array_type, location
    let systemCapacity = new InputItem('System Capacity', 'Test description', 'image' );
    let arrayType = new InputItem('Array Type', 'Test description', 'image' );
    let azimuth = new InputItem('Azimuth', 'Test description', 'image' );
    let tilt = new InputItem('Tilt', 'Test description', 'image');
    let location = new InputItem('Location', 'Test description', 'image');

    this.inputItems = [systemCapacity, arrayType, azimuth, tilt, location];

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

}
