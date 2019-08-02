import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { File } from '@ionic-native/file/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { CalendarModule } from 'ion2-calendar';
import { AgregarEventoPage } from './pages/agregar-evento/agregar-evento.page';
import { AgregarEventoPageModule } from './pages/agregar-evento/agregar-evento.module';
import { AgregarHorarioPage } from './pages/agregar-horario/agregar-horario.page';
import { AgregarHorarioPageModule } from './pages/agregar-horario/agregar-horario.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CalendarModule,
    AgregarEventoPageModule,
    AgregarHorarioPageModule
  ],
  entryComponents: [
    AgregarEventoPage,
    AgregarHorarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Calendar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
