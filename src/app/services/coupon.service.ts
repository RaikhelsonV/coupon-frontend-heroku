import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { DatePipe } from '@angular/common';
import { Observable,of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
  
})
export class CouponService {

  baseUrl = environment.baseUrl;    
    // private url = 'http://localhost:8080/';

  constructor(public datepipe: DatePipe, private httpClient: HttpClient) { }

  public getAllCouponsRest(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseUrl  + "api/getAllCoupons", {withCredentials: true});
  }
  public getAllCoup(token: String): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseUrl + "api/admin/" + token + "/getAllCoup",{withCredentials: true});}

  public getCouponByIdRest(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseUrl +"api/getCouponById/" + id,{withCredentials: true});
  }
  public getCouponByCategoryRest(category: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseUrl  + "api/getAllCouponsByCategory/"+ category,{withCredentials: true});
  }
  public getCouponByCustIdRest(token: String): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.baseUrl +"api/getCouponById/" + token,{withCredentials: true});
  }  
  public getAllCompanyCouponsR(id: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseUrl + "comCoup/" + id, { withCredentials: true });
  }

  }
