import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BcComponent} from './components/bc/bc.component';
import {BComponent} from './components/b/b.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    BcComponent,
    BComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    BComponent
  ]
})
export class BmModule { }
