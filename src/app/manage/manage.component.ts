import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
product:any=[];
form:any;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.getform()
  }
  public getform() {
    this.service.getform().subscribe(res => {
      this.product = res
    })
  }

  reject(id: any) {
    this.service.deletedata(id).subscribe(res => {
      this.getform()
    })
  }

  }


