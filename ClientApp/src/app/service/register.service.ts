import { EventEmitter, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(req: any): Observable<boolean> {
    var url = "https://localhost:5001/api/registration";
    this.http.post<any>(url, req).subscribe({
      error: error => console.error('There was an error!', error)
    });
    return Observable.create();
  }

  remove(req: number): Observable<boolean> {
    var url = "https://localhost:5001/api/registration?id=" + req;
    this.http.delete<any>(url).subscribe({
      error: error => console.error('There was an error!', error)
    });
    return Observable.create();
  }

  upload(imagePath: string): string {
    return 'imageUri';
  }
}
