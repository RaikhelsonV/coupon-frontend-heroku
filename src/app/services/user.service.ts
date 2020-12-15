import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public changeEmail(email: string, password: string): Observable<any>{
    return this.httpClient.post<any>(this.url+ "api/changeEmail/" + email + "/" + password,{
      responseType: 'json'
    });
  }
 public getUsersByEmailAndPassword(email: string, password: string): Observable<any>{
   return this.httpClient.get<any>(this.url + "api/users/" + email + "/" + password,{
     responseType: 'json'
   })
 }

}
