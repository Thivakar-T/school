import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl = 'https://635ce214cb6cf98e56a7c605.mockapi.io/Student'


  constructor(
    private http: HttpClient
  ) { }


  createstudent(data: any) {
    return this.http.post<any>(this.baseurl, data)

  }
  getstudent() {
    return this.http.get<any>(this.baseurl)

  }
  public getstudentid(id: any) {
    return this.http.get<any>(this.baseurl + '/' + id);

  }
  updatestudent(data: any, id: any) {
    return this.http.put<any>(this.baseurl + '/' + id, data);
  }


  deletestudent(id: any) {
    return this.http.delete<any>(this.baseurl + '/' + id);

  }
}


