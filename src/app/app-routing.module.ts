import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoInternetComponent } from './no-internet/no-internet.component';

const routes: Routes = [
  { path: 'nonet', component: NoInternetComponent},
  { path: 'health', loadChildren: () => import('./health-check/health-check.module').then(m => m.HealthCheckModule) }, 
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }, 
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
