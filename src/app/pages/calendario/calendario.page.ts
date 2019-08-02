import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../../services/calendario.service';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar';
import { AgregarEventoPage } from '../agregar-evento/agregar-evento.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-calendario',
  templateUrl: 'calendario.page.html',
  styleUrls: ['calendario.page.scss']
})
export class CalendarioPage implements OnInit {

  dia: string;
  date: Date;
  type: 'string';

  _daysConfig: DayConfig[] = [];
 
  constructor(private modalCtrl: ModalController) {}

  options: CalendarComponentOptions = {
    daysConfig: this._daysConfig
  };

  ngOnInit(){

    this.date = new Date();
    this.dia = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;

    for (let i = 0; i < 31; i++) {
      this._daysConfig.push({
        date: new Date(2019, 6, i + 1),
        subTitle: `Ex.`
      });
    }
  }

  onChange(event) {
    console.log(event);
  }

  async agregarEvento(){
    const modal = await this.modalCtrl.create({
      component: AgregarEventoPage,
      cssClass: 'my-custom-modal-css'
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }
}
