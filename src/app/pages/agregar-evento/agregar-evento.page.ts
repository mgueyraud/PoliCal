import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.page.html',
  styleUrls: ['./agregar-evento.page.scss'],
})
export class AgregarEventoPage implements OnInit {

  customDayShortNames = ['Dom','Lun','Mar','Mie', 'Jue','Vie','Sab'];

  min = `${new Date().getFullYear()}`;
  max = `${new Date().getFullYear() + 1}`;
  valueIni = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  valueFin = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

  evento = {
    titulo: 'Estudiar Algoritmos',
    descripcion: 'Estudiar a las 19:00 hs',
    inicio: this.valueIni,
    fin: this.valueFin
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

 

  cancelar(){
     this.modalCtrl.dismiss();
  }

  guardar(){
    this.modalCtrl.dismiss(this.evento);
  }

  updateInicio(event){
    const fechaCompleta =  event.detail.value;
    const fecha = fechaCompleta.substring(0, 10);
    this.evento.inicio = fecha;
    this.evento.fin = fecha;
    this.valueFin = fecha;
  }

  updateFin(event){
    const fechaCompleta =  event.detail.value;
    const fecha = fechaCompleta.substring(0, 10);
    this.evento.fin = fecha;
  }

}
