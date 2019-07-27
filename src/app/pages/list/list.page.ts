import { Component, OnInit } from '@angular/core';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarComponentOptions,
  CalendarResult
} from 'ion2-calendar';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  diaElegido: Date;

  date: any = {};
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dateRange: { from: '2019-05-02'; to: '2019-05-07'; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  async basic()
  {
    const options: CalendarModalOptions = {
      title: 'BASIC',
      color:'dark'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
      
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
  
  } 

  onChange(event){
    this.diaElegido = event._d;
    console.log(this.diaElegido.getDay());
  }

  async multiple()
  {
    const options = {
      pickMode: 'multi',
      title: 'MULTI',
    };
  
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
      cssClass:'mbg'
    });
  
    myCalendar.present();
  
    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
  }

  async range()
  {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'RANGE',
      color:'danger'
    };
  
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });
  
    myCalendar.present();
  
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    const from: CalendarResult = date.from;
    const to: CalendarResult = date.to;
  
    console.log(date, from, to);
  }
}
