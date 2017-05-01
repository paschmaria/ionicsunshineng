import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InputPage } from '../input-page/input-page';

export class ModuleType{

    name: string;
    description: string;
    imageLink: string;
    id: number;

    constructor(name: string, description: string, imageLink: string, id: number){
        this.name = name;
        this.description = description;
        this.imageLink = imageLink;
        this.id = id;
    }

}

/**
 * Generated class for the ModuleInputPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-module-input-page',
  templateUrl: 'module-input-page.html',
})
export class ModuleInputPage {

  public moduleTypes : ModuleType[] = [];    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let thinFilmModule = new ModuleType('Thin Film Module', 'Test description', 'image', 0);
    let monoModule = new ModuleType('Mono crystalline', 'Test description', 'image', 1);
    let polyModule = new ModuleType('Poly crystalline', 'Test description', 'image', 2);
    
    this.moduleTypes.push(thinFilmModule);
    this.moduleTypes.push(monoModule);
    this.moduleTypes.push(polyModule);
    
  }

  cardClicked(moduleType : ModuleType) : void{
    console.log(moduleType);
    this.navCtrl.push(InputPage, {'moduleType' : moduleType.id } );
  }

}
