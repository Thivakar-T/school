import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url= 'https://634e4aa7f34e1ed826877cda.mockapi.io/student';

  constructor(private http:HttpClient) { }
  
  createstudent(data:any){
    return this.http.post<any>(this.url,data)
  }
  
  getstudent(){
    return this.http.get<any>(this.url)
  }
  editstudent(data:any,id:any){
    return this.http.put<any>(this.url+"/"+id,data);
  }
  getstudentid(id:any){
    return this.http.get<any>(this.url+"/"+id);
  }
  delstudent(id:any){
    return this.http.delete<any>(this.url+"/"+id)
  }
}


