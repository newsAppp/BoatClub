import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
const states = ['Alabama', 'Alaska'];
let RegisterComponent = class RegisterComponent {
    constructor(router, fb, registerService) {
        this.router = router;
        this.fb = fb;
        this.registerService = registerService;
        this.title = "User Login";
        // initialize the form
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            BoatNumber: ['', Validators.required, Validators.min(1)]
        });
    }
    remove() {
        // var url = this.baseUrl + "api/token/auth";
        let boatNumber = this.form.value.BoatNumber;
        this.registerService.remove(boatNumber)
            .subscribe(res => {
            this.router.navigate(["home"]);
        }, err => {
            console.log(err);
            this.form.setErrors({
                "register": "invalid number"
            });
        });
    }
    register() {
        // var url = this.baseUrl + "api/token/auth";
        let boatNumber = this.form.value.BoatNumber;
        this.registerService.remove(boatNumber)
            .subscribe(res => {
            this.router.navigate(["home"]);
        }, err => {
            console.log(err);
            this.form.setErrors({
                "register": "invalid number"
            });
        });
    }
    hasError(name) {
        var e = this.form.get(name);
        return e && (e.dirty || e.touched) && !e.valid;
    }
    ngOnInit() {
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map