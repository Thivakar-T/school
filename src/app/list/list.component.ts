import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loginform!: FormGroup;
  Submitted = false;
  paramid: any;
  obj: any = {};

  constructor(private fb: FormBuilder, private service: TableService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      firstName: ['', Validators.required],
      age: ['', Validators.required],
      fathername: ['', Validators.required],
      contact: ['', Validators.required],
      gender: ['', Validators.required]
    })
    this.paramid = this.route.snapshot.params['data'];
    if (this.paramid) {
      this.getlistId();
    }
  }

  public get f() {
    return this.loginform.controls;
  }
  onSubmit() {
    this.Submitted = true
    if (this.loginform.invalid) {
      return;
    }
    if (this.paramid) {
      this.loginform.value.id = this.paramid
      this.service.updatelist(this.loginform.value, this.paramid).subscribe(
        res => {
          this.router.navigate(['/students']);
        })
    }
    else {
      this.service.createlist(this.loginform.value).subscribe(res => {
        this.router.navigate(['/students']);
      })
    }

  }
  getlistId() {
    this.service.getiddata(this.paramid).subscribe(
      res => {
        this.obj = res
      })
  }

}
