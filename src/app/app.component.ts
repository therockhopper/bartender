import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  grandTotal: number = 0
  numberOfDomestic: number = 0
  numberOfImport: number = 0
  domesticPrice: number = 4.75
  importPrice: number = 6.75
  commonBill: number = 0
  commonBillRemainder: number = 0
  commonBills: number[] = [
    5, 10, 15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100
  ]

  calculateTotal(kind: string, numberOf:number): void {
    if ( kind === 'domestic' ) {
      this.numberOfDomestic = this.numberOfDomestic + numberOf
    } else {
      this.numberOfImport= this.numberOfImport+ numberOf
    }
    this.grandTotal = (this.numberOfImport * this.importPrice) + (this.numberOfDomestic * this.domesticPrice )
    this.commonBill = this.getCommonBill()
    this.commonBillRemainder = this.getRemainder()
  }

  setCommonBill(bill:number= 0): void {
    this.commonBill = bill 
    this.commonBillRemainder = this.getRemainder()
  }

  getRemainder(): number{
    return this.commonBill - this.grandTotal
  }

  getCommonBill(): number {
    let bill:number
    for (let i:number = 0;i < this.commonBills.length; i++) {
      if (this.grandTotal <  this.commonBills[i]) {
        bill = this.commonBills[i]
        return bill
      }
    }
  }

  clear(): void {
    this.grandTotal = 0
    this.numberOfImport = 0
    this.numberOfDomestic = 0
    this.commonBill = 0
    this.commonBillRemainder = 0;
  }
}
