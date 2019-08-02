import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Horarios',
      url: '/home',
      icon: 'time'
    },
    {
      title: 'Calendario',
      url: '/calendario',
      icon: 'calendar'
    },
    {
      title: 'Secciones',
      url: '/secciones',
      icon: 'list'
    },
    {
      title: 'Calculadora',
      url: '/calculadora',
      icon: 'calculator'
    },
    {
      title: 'Sobre',
      url: '/informacion',
      icon: 'information-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
