import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { QueContainerComponent } from './que-container/que-container.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    QueContainerComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule, 
    FormsModule
  ]
})
export class ListModule { }
