import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private url = 'http://localhost:8080/';
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public changeEmail(email: string, password: string): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+ "api/changeEmail/" + email + "/" + password,{
      responseType: 'json'
    });
  }
 public getUsersByEmailAndPassword(email: string, password: string): Observable<any>{
   return this.httpClient.get<any>(this.baseUrl + "api/users/" + email + "/" + password,{
     responseType: 'json'
   })
 }

}
