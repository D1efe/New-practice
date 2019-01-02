import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style = false;

  constructor() { }

  ngOnInit() {

  }

  firstClick() {
    console.log('the first button works');
  }

  secondClick() {
      this.h1Style = true;
      console.log('text on page should change');
    }


}
