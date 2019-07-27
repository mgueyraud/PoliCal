import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CalendarioPage } from './calendario.page';
import { CalendarModule } from 'ion2-calendar';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarioPage
      }
    ])
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
