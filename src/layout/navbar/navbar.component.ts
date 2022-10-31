import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/Menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  list:any;
  constructor() { }

  ngOnInit(): void {
    this.getNav()
  }

  getNav(){
    console.log(MENU)
    this.list=MENU
  }
}
