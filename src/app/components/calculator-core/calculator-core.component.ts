import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-core',
  templateUrl: './calculator-core.component.html',
  styleUrls: ['./calculator-core.component.css']
})
export class CalculatorCoreComponent implements OnInit {
  
  public num1!: number;
  public num2!: number;
  public result!: number;
  public errorText!: string;
  public seeResult!: boolean;
  public seeError!: boolean;

  constructor() { }
  
  ngOnInit(): void {
    this.seeResult = false;
    this.seeError = false;
  }
  
  nanCheck(){
    if (Number.isNaN(this.num1) && Number.isNaN(this.num2)){
      this.seeResult = false;
      this.errorText = 'Please introduce some numbers before';
      this.seeError = true;
    } else if (Number.isNaN(this.num1) || Number.isNaN(this.num2)) {
      this.seeResult = false;
      this.errorText = 'Can\'t perform this one!';
      this.seeError = true;
    } else {
      this.seeResult = true;
      this.seeError = false;
    }
  }

  sum(){
    this.nanCheck();
    this.result = this.num1 + this.num2;
  }
  
  substract(){
    this.nanCheck();
    this.result = this.num1 - this.num2;
  }
  
  multiply(){
    this.nanCheck();
    this.result = this.num1 * this.num2;
  }
  
  divide(){
    this.nanCheck();
    if (this.num2 === 0) {
      this.errorText = 'Can\'t perform this one!';
      this.seeError = true;
      this.seeResult = false;
    } else {
      this.result = this.num1 / this.num2;
      this.seeResult = true;
      this.seeError = false;
    }
  }
  
  
  reset() {
    this.num1 = 0
    this.num2 = 0
    this.seeError = false;
    this.seeResult = false;
  }
}

