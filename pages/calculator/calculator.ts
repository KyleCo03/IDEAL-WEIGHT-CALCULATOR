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
  gender: char;
  miller: number;
  robinson: number;
  devine: number;
  hamwi: number;
  IBWmessage: string;

  constructor(public navCtrl: NavController) {}

    calcIBW()
    {
      this.tothii = (this.hif * 12) + this.hii;

      if(this.tothii >= 60)
      {
        if (this.gender = "m") 
        {
          this.miller   = 56.2 + ((this.tothii - 60) * 1.41);
          this.robinson = 52   + ((this.tothii - 60) * 1.9 );
          this.devine   = 50   + ((this.tothii - 60) * 2.3 );
          this.hamwi    = 48   + ((this.tothii - 60) * 2.7 );
        } else 
          {
            this.miller   = 53.1 + ((this.tothii - 60) * 1.36);
            this.robinson = 49   + ((this.tothii - 60) * 1.7 );
            this.devine   = 45.5 + ((this.tothii - 60) * 2.3 );
            this.hamwi    = 45.5 + ((this.tothii - 60) * 2.2 );         
          }
      } 
      else
      {
        this.IBWmessage="Minimum height of 5 feet please"
      }
    }

}
    



  


