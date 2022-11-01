import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Route} from '@angular/router';
import { WorkerService } from '../workerservice.service';


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
  product:any

  constructor(private ws:WorkerService,
    private router:Router,
    private activatedroute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.get()

  }
  get(){
    this.ws.getstudent().subscribe(
      res => {
        console.log(res)
        this.product=res
      })
  }
  reject(id:any){
    this.ws.deletestudent(id).subscribe(
      res => {
        this.get()
      })
  }

}

