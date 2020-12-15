import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/coupon';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private router:Router) { }
 
  public getCustomerRest(token: String, id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url +"api/getCustomerById/"+token + "/" + id,{withCredentials:true} );
   }
   public getCustomerR(token: String ): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url +"api/getCustomer/"+token ,{withCredentials:true} );
   }
 
 
  public getAllCustomersRest(token: String): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + "api/admin/" + token + "/getAllCustomers");
 
  }

  public getCouponsByDescriptionLikeRest(token:String,description: String): Observable<Coupon[]>{
    return this.httpClient.get<Coupon[]>(this.url +"api/description/"+ token + "/"+description,{withCredentials:true});
  }
   public getCouponsByTitleRest(token:String,title: String) {
    return this.httpClient.get<Coupon[]>(this.url +"api/title/"+ token + "/"+title,{withCredentials:true});
  }
  public getAllCouponsByPriceLessThan(token:String,price: number): Observable<Coupon[]>{
    return this.httpClient.get<Coupon[]>(this.url +"api/priceLessThan/"+token + "/"+ price,{withCredentials:true});
  } 
  public  getAllByPriceIsGreaterThan(token:String,price: number): Observable<Coupon[]>{
    return this.httpClient.get<Coupon[]>(this.url +"api/priceGreaterThan/"+token + "/"+ price,{withCredentials:true});}


  public updateCusCustomerRest(token: String,customer_id:number ,customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.url + "api/customer/" + token + "/updateCustomer/" + customer_id, customer, {withCredentials: true});
  }

  public releaseCusCouponRest(token: String, coupon_id: number): Observable<any> {
    return this.httpClient.post<any>(this.url + "api/customer/" + token + "/useCoupon/" + coupon_id, {withCredentials: true});
  }
  public purchaseCoupon(token: String, coupon_id: number): Observable<any> {
    return this.httpClient.post<any>(this.url + "api/customer/" + token + "/addCoupon/" + coupon_id, {withCredentials: true});
  }

  public getAllCustomerCoupons(token:String): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + "api/customerCoup/" + token);
  }





}

