import { Component, OnInit } from '@angular/core';
import { CompanyListService } from './company-list.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  constructor(private companyService:CompanyListService){}
  companies :Object;
  isShowMore=false;
  cityValue:string;
  ngOnInit(){
    this.getCompanies('','');
  }
  getCompanies(city,name){
    this.companyService.getCompanyList(city,name).subscribe(res=>{
      this.companies = res;
    });
  }
  onChange(){
    this.getCompanies(this.cityValue,'');
  }
  onEnterName(event){
    this.getCompanies('',event.value);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/