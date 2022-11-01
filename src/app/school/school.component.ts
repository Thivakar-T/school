import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {
  schoolForm!: FormGroup;
  public Submitted = false;
  obj: any = {};
  paramId: any;
  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.schoolForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      fatherName: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      contact: [
        '',
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern('^[0-9]*$'),
      ],
      address: ['', Validators.required],
    });
    this.paramId = this.router.snapshot.params['data'];
    if (this.paramId) {
      this.edit();
    }
  }
  get f() {
    return this.schoolForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
    if (this.schoolForm.invalid) {
      return;
    }

    if (this.paramId) {
      this.schoolForm.value.id = this.paramId;
      this.service
        .editstudent(this.schoolForm.value, this.paramId)
        .subscribe((res) => {
        this.route.navigate(['/table']);
        });
    } else {
      this.service.createstudent(this.schoolForm.value).subscribe((res) => {
        this.route.navigate(['/table']);
      });
    }
  }
  edit() {
    this.service.getstudentid(this.paramId).subscribe((res) => {
      this.obj = res;
    });
  }
}
