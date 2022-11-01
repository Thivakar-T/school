import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PageserviceService } from '../pageservice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pageForm! : FormGroup;
  public Submitted = false;
  paramId:any;
  obj:any=[]

  constructor(private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private service : PageserviceService){}
    
  ngOnInit(): void {
    this.pageForm = this.fb.group({
      id : [''],
      firstName : ['', Validators.required],
      fatherName : ['', Validators.required],
      gender : ['', Validators.required],
      age : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      address : ['', Validators.required]

    })
    this.paramId = this.route.snapshot.params['data'];
    if(this.paramId){
      this.getId();
    }
}
  
  get f() {
    return this.pageForm.controls}
  onSubmit(){
    this.Submitted = true;
    if(this.pageForm.invalid){
     return;
   }
   if(this.paramId){
    this.pageForm.value.id=this.paramId
    this.service.updateLogin(this.pageForm.value,this.paramId).subscribe(
      res => {
        this.router.navigate(['/pagelist']);
      })
  }else{
  this.service.postdata(this.pageForm.value).subscribe(
    res => {
      this.router.navigate(['/pagelist']);
    })}
}

getId(){
  this.service.getidData(this.paramId).subscribe(
    res => {
      this.obj=res
    })
}
  
}

