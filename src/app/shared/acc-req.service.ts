import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { AccReq } from './acc-req.model';

@Injectable({
  providedIn: 'root',
})
export class AccReqService {
  url: string = environment.apiBaseUrl + '/AccReq';
  list: AccReq[] = [];
  formData: AccReq = new AccReq();
  constructor(private http: HttpClient) {}

  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.list = res as AccReq[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postDetail(){
    return this.http.post(this.url, this.formData)
  }
}
