import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyListService {


  private url = 'https://api.openbrewerydb.org/breweries';

  constructor(private http: HttpClient) { }

  getCompanyList(city,name) {
    let apiUrl  = this.url;
    if(city || name){
      apiUrl +='?';
      if(city)
        apiUrl =apiUrl+'by_city='+city;
      if(city && name)
        apiUrl +='&';
      if(name)
        apiUrl =apiUrl+'by_name='+name;
    }
    return this.http.get(apiUrl);
  }
}
