import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { QueContainerComponent } from './que-container/que-container.component';

const routes: Routes = [
  {path: '', children: [
  { path: '', pathMatch: 'full', component: QueContainerComponent},
  { path: ':id', component: DetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
