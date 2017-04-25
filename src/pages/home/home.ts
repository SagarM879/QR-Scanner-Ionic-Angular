import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* Importing BarcodeScanner from @ionic-native */ 


import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public results: {};
  constructor(public navCtrl: NavController,public barcode:BarcodeScanner) {

  }

 /* 
    # Create the Function => scanQrCode()
 */

 async scanQrCode() {

        this.results = await this.barcode.scan();
        console.log(this.results);

 }


}
