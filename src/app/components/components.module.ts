import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MCalendarComponent } from './m-calendar/m-calendar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ MCalendarComponent],
  imports: [
    IonicModule.forRoot(),
    CommonModule
  ],
  exports:[
    MCalendarComponent
  ]
})
export class ComponentsModule { }
