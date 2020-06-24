import { EventEmitter, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { sample } from 'rxjs-compat/operator/sample';


@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  rent(req: any): Observable<boolean> {
    var url = "https://localhost:5001/api/rent";
    this.http.post<any>(url, req).subscribe({
      error: error => console.error('There was an error!', error)
    });
    return Observable.create();
  }

  return(id: number): Observable<boolean> {
    var url = "https://localhost:5001/api/return/" + id;
    this.http.post<any>(url, null).subscribe({
      error: error => console.error('There was an error!', error)
    });
    return Observable.create();
  }
}
