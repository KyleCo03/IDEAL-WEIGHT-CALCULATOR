import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
  styleUrls: ['calculator.css']
})
export class CalculatorPage {
  feet: number;
  inches: number;
  totalheight: number;
  gender: string;

  constructor(public navCtrl: NavController) {

  }

}
