import { Component, ViewChild, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { IonSegment, ModalController } from '@ionic/angular';
import { HomeServiceService } from '../../services/home-service.service';
import { AgregarHorarioPage } from '../agregar-horario/agregar-horario.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  
  @ViewChild(IonSegment) segment: IonSegment;

  dias = ['Lunes', 'Martes', 'Miercoles' ,'Jueves', 'Viernes', 'Sabado' ];


  constructor(private fileUpload: FileUploadService,
              private homeService: HomeServiceService,
              private modalCtrl: ModalController) {}

  // onFileChange(event){
  //   this.fileUpload.onFileChange(event);
  //   this.fileUpload.import();
  //   console.log(event);
  // }

  ngOnInit(){
    this.segment.value = this.homeService.obtenerDia();
  }

  cambioDia( event ) {

  }

  async armarHorario() { 
    const modal = await this.modalCtrl.create({
      component: AgregarHorarioPage,
      cssClass: 'my-custom-modal-css'
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

  

  
}
