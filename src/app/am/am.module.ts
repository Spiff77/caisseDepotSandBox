import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AComponent} from './components/a/a.component';
import {AcComponent} from './components/ac/ac.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    AComponent,
    AcComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AComponent,
    AcComponent,
  ]
})
export class AmModule { }
