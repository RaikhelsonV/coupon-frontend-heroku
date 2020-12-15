import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/coupon';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ModeService } from './mode.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {


  private compUrl = "/assets/json/companies.json";
  // private url = 'http://localhost:8080/';
  baseUrl = environment.baseUrl;

  public constructor(private httpClient: HttpClient, private router: Router, private modeService: ModeService) { }

   public getAllCompaniesRest(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseUrl+ "api/getAllCompanies");
  }
  public getAllComp(token: String): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseUrl + "api/admin/" + token + "/getAllComp");
  }

  public getCompanyByIdRest(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl +"api/getCompanyById/" + id,{withCredentials: true});
  }
  public getCompanyR(token: String ): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl +"api/getCompany/"+token ,{withCredentials:true} );
   }
  public updateCompCompanyRest(token: string,company_id:number,company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.baseUrl + "api/company/" + token + "/updateCompany/"+ company_id , company, {withCredentials: true});
  }
  public updateCompCouponRest(token: string, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.baseUrl + "api/company/" + token + "/updateCoupon/" , coupon , {withCredentials: true});
  }
  public addCouponRest(token: string, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.baseUrl + "api/company/" + token + "/createCoupon", coupon, { withCredentials: true});
  }
  public deleteCompCouponRest(token: string, coupon_id: number): Observable<Coupon> {
    return this.httpClient.delete<Coupon>(this.baseUrl + "api/company/" + token + "/deleteCoupon/" + coupon_id, {withCredentials: true});
  }
  public getAllCompanyCoupons(token:String): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.baseUrl + "api/companyCoup/" + token);
  }


 



    




  
}
