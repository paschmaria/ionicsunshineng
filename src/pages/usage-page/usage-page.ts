import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

class Appliance{
  name: string;
  description: string;
  powerConsumed: number;
  imageLink: string;
  units: number;

  constructor(name: string, description: string, powerConsumed: number, imageLink: string){
    this.name = name;
    this.description = description;
    this.powerConsumed = powerConsumed;
    this.imageLink = imageLink;
    this.units = 0;
  }
}

// @Component({
//   selector: 'custom-appliance-form',
//   templateUrl: 'custom-appliance-form.html',
// })
// export class CustomApplianceForm{
//   name: string;
//   description: string;
//   powerConsumed: number;
//   units: number;
//   formDisabled: boolean = true;

//   constructor(){}

//   validate(){
//     if(this.name && this.description && this.powerConsumed){
//       this.formDisabled = false;
//     }

//   }

//   save(){
//     return new Appliance(this.name, this.description, this.powerConsumed, "custom image");
//   }
// }

@IonicPage()
@Component({
  selector: 'page-usage-page',
  templateUrl: 'usage-page.html',
  
})
export class UsagePage {

  appliances : Appliance[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let phone = new Appliance('Phone', 'Mobile phone',  2.3, 'image');
    let tv = new Appliance('TV', 'Television', 4.0, 'imaging');
    let fridge = new Appliance('Fridge', 'Fridge appliance', 4.9, 'images');

    this.appliances.push(phone);
    this.appliances.push(tv);
    this.appliances.push(fridge);
    console.log(this.appliances);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsagePage');
  }

  changed(appliance){
    console.log(appliance);
  }

  addAppliance(){

  }

}

@Component({
  selector: 'usage-bar',
  template: 'Hello'
})
export class UsageBar{
  @Input() percentage: number = 0;
  backgroundColor : string;
  colorMappings = {
    0: -1,
    25: 0,
    50: 1,
    75: 2,
    100: 3
  };

  constructor(){
    this.setLevel(this.percentage);
  }

  setLevel(percentage): void{
    for(var item in this.colorMappings){
      if(percentage >= item){
        this.setBarColor(this.colorMappings[item]);
      }
    }
  }

  setBarColor(color): void{
    this.backgroundColor = color;
  }
}
