import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  dia:Date;
  
  constructor() { }

  obtenerDia() {

    this.dia = new Date();
    let diaActual;
    switch(this.dia.getDay().toString()){
      case '1':
        diaActual = 'Lunes';
        break;
      case '2':
        diaActual = 'Martes';
        break;
      case '3':
        diaActual = 'Miercoles';
        break; 
      case '4':
        diaActual = 'Jueves';
        break;
      case '5':
        diaActual = 'Viernes';
        break;
      case '6':
        diaActual = 'Sabado';
        break;
      default:
        diaActual = 'Lunes';
        break;
    }

    return diaActual;
  }
}
