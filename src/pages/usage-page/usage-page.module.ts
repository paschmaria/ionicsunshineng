import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsagePage } from './usage-page';

@NgModule({
  declarations: [
    UsagePage,
  ],
  imports: [
    IonicPageModule.forChild(UsagePage),
  ],
  exports: [
    UsagePage
  ]
})
export class UsagePageModule {}
