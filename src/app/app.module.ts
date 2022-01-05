import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyListModule } from './company-list/company-list.module';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CompanyListModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CompanyListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/