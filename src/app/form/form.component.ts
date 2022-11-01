import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  loginform!: FormGroup
  Submitted = false;
  paramid:any;
  obj:any=[];
  
 
  constructor(private fb: FormBuilder, private service: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      firstname: ['',Validators.required],
      fathername: ['' ,Validators.required],
      age:['' ,Validators.required],
      contact:['' ,Validators.required],
      gender:['',Validators.required]
    })
    this.paramid = this.route.snapshot.params['data'];
    if (this.paramid) {
      this.getformId();
    }
  }
  get f(){
    return this.loginform.controls
  }
  onSubmit() {
    this.Submitted =true;
     
    if (this.loginform.invalid) {
      return;
    }
    if (this.paramid) {
      this.loginform.value.id = this.paramid
      this.service.updateform(this.loginform.value, this.paramid).subscribe(
        res => {
          this.router.navigate(['/manage']);
        })
    }
    else {
      this.service.createform(this.loginform.value).subscribe(res => {
        this.router.navigate(['/manage']);
      })
    }

  }
  getformId() {
    this.service.getiddata(this.paramid).subscribe(
      res => {
        this.obj = res
      })
    
  }
}
