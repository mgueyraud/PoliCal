import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor() { }

  obtenerDiaString(date: Date): string{
    let dia = date.getFullYear() + '-' +  (date.getMonth() + 1 ) + '-' + date.getDate();
    return dia;
  }

  
} 
