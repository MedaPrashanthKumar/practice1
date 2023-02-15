import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice1';
  showMsg = true;
  colorName = 'green';
  switchValue = '3';
  users = [
    {
      id: 1,
      name: 'Robert',
    },
    {
      id: 2,
      name: 'Johnson',
    },
    {
      id: 3,
      name: 'Ram',
    },
    {
      id: 4,
      name: 'lakshmana',
    },
    {
      id: 5,
      name: 'bharatha',
    },
    {
      id: 6,
      name: 'shaturagna',
    }
  ];
  colorVal = 'green';
  bgColor = '#ddd';
  clsName1 = 'one ';
  clsName2 = 'two';
  empName = "vasavi";
  empId = 1;
  user = {
      jerseyNo : 7,
      name : "MSDhoni"
  }
  colValue = 'red';
  placeHolderVal = 'Enter the Value';
  hrefValue = 'https://www.google.com/';
  showAlert(){
    alert("Hello from Cognizant");
  }
  consoleLog(){
    console.log("From the input focus event ");
    
  }
  // firstNumber = '' ;
  // secondNumber = '';
  // sum = this.firstNumber + this.secondNumber;
}
