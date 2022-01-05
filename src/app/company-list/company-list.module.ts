import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CompanyListComponent
  ]
})
export class CompanyListModule { }
