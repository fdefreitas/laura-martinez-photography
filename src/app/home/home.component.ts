import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lmp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public title = 'Laura Martinez Photography';

  constructor() { }

  ngOnInit() {
  }

}
