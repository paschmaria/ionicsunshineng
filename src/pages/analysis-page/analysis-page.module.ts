import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnalysisPage } from './analysis-page';

@NgModule({
  declarations: [
    AnalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(AnalysisPage),
  ],
  exports: [
    AnalysisPage
  ]
})
export class AnalysisPageModule {}
