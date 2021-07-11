import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RetryComponent } from './retry/retry.component';
import { LoaderColorDirective } from './loader-color.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    RetryComponent,
    LoaderColorDirective
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CommonModule, 
    LoaderComponent,
    RetryComponent,
    LoaderColorDirective
  ]
})
export class SharedModule { }
