import { Component, OnInit } from '@angular/core';
import { PageserviceService } from './../pageservice.service';
import { Router, ActivatedRoute,Route } from '@angular/router';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.scss']
})
export class PagelistComponent implements OnInit {
  product:any
  constructor(
    private router:Router,
    private activatedroute:ActivatedRoute,
    private sc :PageserviceService
  ) { }

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.sc.getLogin().subscribe(
      res => {
        this.product=res
      })
  }
  reject(id:any){
    this.sc.deleteData(id).subscribe(
      res => {
        this.get()
      })
  }

}
