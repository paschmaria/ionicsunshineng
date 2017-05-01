import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModuleInputPage } from './module-input-page';

@NgModule({
  declarations: [
    ModuleInputPage,
  ],
  imports: [
    IonicPageModule.forChild(ModuleInputPage),
  ],
  exports: [
    ModuleInputPage
  ]
})
export class ModuleInputPageModule {}
