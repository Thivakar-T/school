import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private studentService:StudentService,
    private route:ActivatedRoute,
    private router:Router

    ) { }



  ngOnInit(): void {
    this.StudentForm = this.fb.group({
      id:[''],
      firstName:['',Validators.required],
      age:['',Validators.required],
    })
    this.studentService.getstudent().subscribe(
      res => {
        console.log(res)
      })


    this.paramId = this.route.snapshot.params['id'];
    console.log(this.paramId)
    this.getId();
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
      this.studentService.updatestudent(this.StudentForm.value, this.paramId).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/studentist']);
        })
    }
    else {
      this.studentService.createstudent(this.StudentForm.value).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/studentlist']);
        })
    }
  }
  getId() {
    this.studentService.getstudentid(this.paramId).subscribe(
      res => {
        console.log(res)
        this.obj = res
      })
  }
}

