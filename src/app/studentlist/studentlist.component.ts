import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router ,ActivatedRoute,Route} from '@angular/router';


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
  product:any


  constructor(private ds:StudentService,
    private router:Router,
    private activatedroute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.get()

  }
  get(){
    this.ds.getstudent().subscribe(
      res => {
        console.log(res)
        this.product=res
      })
  }
  reject(id:any){
    // this.ds.deletestudent(id).subscribe(
    //   res => {
    //     this.get()
    //   })
  }

}

