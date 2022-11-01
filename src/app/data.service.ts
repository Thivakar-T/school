import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL = 'https://6348e5a70b382d796c7997bc.mockapi.io/data'
  constructor(private http: HttpClient) { }
  createform(data: any) {
    return this.http.post<any>(this.URL, data);
  }

  getform() {
    return this.http.get<any>(this.URL);
  }

  updateform(data: any, id: any) {
    return this.http.put<any>(this.URL + '/' + id, data);
  }

  getiddata(id: any) {
    return this.http.get<any>(this.URL + '/' + id);
  }

  deletedata(id: any) {
    return this.http.delete<any>(this.URL + '/' + id);
  }

}
