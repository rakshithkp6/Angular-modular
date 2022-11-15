import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCompComponent } from './base-comp.component';
import { BASE_ROUTES } from './base-comp.routes';
import { RouterModule } from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@NgModule({
  declarations: [
    BaseCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BASE_ROUTES)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseCompModule { }
