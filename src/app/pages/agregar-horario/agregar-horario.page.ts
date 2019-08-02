import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-horario',
  templateUrl: './agregar-horario.page.html',
  styleUrls: ['./agregar-horario.page.scss'],
})
export class AgregarHorarioPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  // TODO: Hacer el horario list y sublist y hacer transicion con slides

}
