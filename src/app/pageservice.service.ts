import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {
  private baseUrl='https://634e4aaaf34e1ed826877d3e.mockapi.io/student'
  constructor(
    private http:HttpClient
  ) { }
  postdata(data:any){
    return this.http.post<any>(this.baseUrl, data);
  }
  getLogin(){
    return this.http.get<any>(this.baseUrl);
  }
  updateLogin(data:any,id:any) {
    return this.http.put<any>(this.baseUrl+ '/' + id, data);
  }
  getidData(id: any) {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
  deleteData(id: any) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
