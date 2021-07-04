import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list.component';
import { QueContainerComponent } from './que-container/que-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'que', pathMatch: 'full' },
  { path: 'que', component: QueContainerComponent, 
  children: [ 
            { path: '', redirectTo: 'list', pathMatch: 'full'  },
            { path: 'list', component: ListComponent },
            { path: 'details', component: DetailsComponent }
            ]
},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
