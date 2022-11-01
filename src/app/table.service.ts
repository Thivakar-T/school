import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private URL = 'https://634e4a6af34e1ed826877685.mockapi.io/Teachers'
  constructor(private http: HttpClient) { }

  createlist(data: any) {
    return this.http.post<any>(this.URL, data);
  }

  getlist() {
    return this.http.get<any>(this.URL);
  }

  updatelist(data: any, id: any) {
    return this.http.put<any>(this.URL + '/' + id, data);
  }

  getiddata(id: any) {
    return this.http.get<any>(this.URL + '/' + id);
  }

  deletedata(id: any) {
    return this.http.delete<any>(this.URL + '/' + id);
  }

}



