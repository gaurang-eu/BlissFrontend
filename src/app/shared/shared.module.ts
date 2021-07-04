import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RetryComponent } from './retry/retry.component';



@NgModule({
  declarations: [
    LoaderComponent,
    RetryComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CommonModule, 
    LoaderComponent,
    RetryComponent
  ]
})
export class SharedModule { }
