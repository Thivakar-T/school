import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Route,ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  product:any
  paramId:any
  constructor(private service:StudentService,
  private route:Router,
  private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
   this.readget()
  }

  readget(){
    this.service.getstudent().subscribe(res=>{
      console.log(res)
    this.product=res
    })
  
    
  }
  reject(id:any){
    this.service.delstudent(id).subscribe(
      res => {
        this.readget()
      })
  }
}
