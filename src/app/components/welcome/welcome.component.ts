import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  pageTitle: string= 'Bienvenue à l\'INSAT';
  constructor() { }

  ngOnInit() {
  }

}
