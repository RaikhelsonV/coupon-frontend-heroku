import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private url = 'http://localhost:8080/';
  baseUrl = environment.baseUrl;

  public constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any> (this.baseUrl + "api/login/" + email + "/" + password,
       {responseType: 'json'});
  }
  public registration(email: string, password: string, role: number): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + "api/reg/"+ email + "/" + password+"/"+ role,{
      responseType: 'json'
    });
    
  }

    
  }
  

