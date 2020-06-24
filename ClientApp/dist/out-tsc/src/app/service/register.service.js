import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/Rx';
let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    register(req) {
        var url = "https://localhost:5001/api/registration";
        this.http.post(url, req).subscribe({
            // next: data => this.postId = data.id,
            error: error => console.error('There was an error!', error)
        });
        return Observable.create();
    }
    remove(req) {
        var url = "https://localhost:5001/api/registration";
        this.http.delete(url).subscribe({
            // next: data => this.postId = data.id,
            error: error => console.error('There was an error!', error)
        });
        return Observable.create();
    }
};
RegisterService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RegisterService);
export { RegisterService };
//# sourceMappingURL=register.service.js.map