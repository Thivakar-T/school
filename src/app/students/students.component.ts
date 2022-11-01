import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  product: any = []
list: any;

  constructor(private service: TableService,) { }

  ngOnInit(): void {
    this.getlist()
  }
  public getlist() {
    this.service.getlist().subscribe(res => {
      this.product = res
    })
  }

  reject(id: any) {
    this.service.deletedata(id).subscribe(res => {
      this.getlist()
    })
  }
}
