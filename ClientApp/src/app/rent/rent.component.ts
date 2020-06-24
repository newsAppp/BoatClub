import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { RentService } from '../service/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  title: string;
  rentForm: FormGroup;
  returnForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private rentService: RentService) {
    this.title = "Registration";
    this.createForm();

  }

  createForm() {
    this.returnForm = this.fb.group({
      BoatNumber: [1, Validators.min(1)]
    });
    this.rentForm = this.fb.group({
      BoatId: [1, Validators.min(1)],
      CustomerName: ['Bob', Validators.required]
    });
  }

  rent() {
    // var url = this.baseUrl + "api/token/auth";
    var boatNumber = this.rentForm.value;

    this.rentService.rent(boatNumber)
      .subscribe(res => {
        this.router.navigate(["home"]);
      },
        err => {
          console.log(err)
          this.rentForm.setErrors({
            "register": "invalid number"
          });
        });
  }

  return() {
    // var url = this.baseUrl + "api/token/auth";
    let id = this.returnForm.value.BoatNumber;

    this.rentService.return(id)
      .subscribe(res => {
        this.router.navigate(["home"]);
      },
        err => {
          console.log(err)
          this.returnForm.setErrors({
            "register": "invalid number"
          });
        });
  }

  hasError(name: string) {
    var e = this.returnForm.get(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }
  
  regHasError(name: string) {
    var e = this.rentForm.get(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }

  ngOnInit(): void {
  }

}
