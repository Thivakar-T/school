import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkerService } from '../workerservice.service';

@Component({
  selector: 'app-student',
  templateUrl:'./student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  StudentForm!:FormGroup ;
  public Submitted=false;
  paramId: any;
  obj: any = [];


 
  constructor(private fb:FormBuilder,
    private ws:WorkerService,
    private route:ActivatedRoute,
    private router:Router

    ) { }



  ngOnInit(): void {
    this.StudentForm = this.fb.group({
      id:[''],
      firstName:['',Validators.required],
      age:['',Validators.required],
      fatherName:['',Validators.required],

    })
    

    this.paramId = this.route.snapshot.params['data'];
    console.log(this.paramId)
    if(this.paramId){
      this.getId()
    }
  }
  get f() {return this.StudentForm.controls;
  
    }
  submit(){
    this.Submitted = true;
    if (this.StudentForm.invalid) {
      return;
    }
    console.log(this.StudentForm.value.id)
    
    if (this.paramId) {
      this.StudentForm.value.id = this.paramId
      this.ws.updatestudent(this.StudentForm.value, this.paramId).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/studentlist']);
        })
    }
    else {
      this.ws.createstudent(this.StudentForm.value).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/studentlist']);
        })
    }
  }
  getId() {
    this.ws.getstudentid(this.paramId).subscribe(
      res => {
        console.log(res)
        this.obj = res
      })
  }
}

