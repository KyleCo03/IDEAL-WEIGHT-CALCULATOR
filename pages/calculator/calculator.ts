import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
  styleUrls: ['calculator.css']
})
export class CalculatorPage {
  hif: number;
  hii: number;
  tothii: number;
  gender: string;
  miller: number;
  robinson: number;
  devine: number;
  hamwi: number;

  constructor(public navCtrl: NavController) {}
   
  calculateIBW(){
    this.tothii = ((this.hif) * 12) + hii;

      this.miller = 52 + ((tothii - 60) * 1.9);
  }

  

}
