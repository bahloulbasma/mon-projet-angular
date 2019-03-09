import { Component } from '@angular/core';
import { Appareil } from './appareil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello';
  isAuth: boolean = false;
  appareilone: string ='Iphone';
  appareilTow: string ='Ordinateur';
  appareilthree: string ='Frigo';
  appareils: Appareil[];
  lastUpdate: Date = new Date();
  constructor(){
    setTimeout(
      () => {
        this.isAuth=true;
      },
      4000
    );
    this.appareils = [
      {
        name: 'Iphone',
        status: true
      },
      {
        name: 'Ordinateur',
        status: false
      },
      {
        name: 'Frigo',
        status: true
      }
    ];
  }
  onAllumer(){
    console.log('on allume tout');
  }


}
