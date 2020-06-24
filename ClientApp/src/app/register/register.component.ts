import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { RegisterService } from '../service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string;
  form: FormGroup;
  regForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService) {

    this.title = "Registration";

    // initialize the form
    this.createForm();

  }

  createForm() {
    this.form = this.fb.group({
      BoatNumber: [1, Validators.min(1)]
    });
    this.regForm = this.fb.group({
      Id: [1, Validators.min(1)],
      Name: ['Bob', Validators.required],
      HourlyRate: [50, Validators.min(1)],
      Image: ['', Validators.required]
    });
  }
  

  remove() {
    // var url = this.baseUrl + "api/token/auth";
    var boatNumber = this.form.value.BoatNumber;

    this.registerService.remove(boatNumber)
      .subscribe(res => {
        this.router.navigate(["home"]);
      },
        err => {
          console.log(err)
          this.form.setErrors({
            "register": "invalid number"
          });
        });
  }

  register() {
    let req = this.regForm.value;
    let imageURI = '';
    
    req.Image = this.registerService.upload(req.Image);
    
    this.registerService.register(req)
      .subscribe(res => {
        this.router.navigate(["home"]);
      },
        err => {
          console.log(err)
          this.regForm.setErrors({
            "register": "invalid number"
          });
        });
  }

  hasError(name: string) {
    var e = this.form.get(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }
  
  regHasError(name: string) {
    var e = this.regForm.get(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }

  

  ngOnInit(): void {
  }

}
