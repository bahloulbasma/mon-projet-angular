import { Component } from '@angular/core';
import { Appareil } from './appareil';
import { AppareilService } from './services/appareil.service';

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
  switch : boolean=true;
  constructor( private appareilservice: AppareilService){
    setTimeout(
      () => {
        this.isAuth=true;
      },
      4000
    );
   this.appareils=this.appareilservice.appareils;
  }
  onAllumer(){
    console.log('on allume tout');
  }
  onSwitch() {
    this.switch = !this.switch;
    this.appareilservice.onSwitch(this.switch);
  }

}
