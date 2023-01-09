import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegNnppComponent } from './reg-nnpp/reg-nnpp.component';

const routes: Routes = [
    { path: '', redirectTo: 'reg', pathMatch: 'full' },
  { path: 'reg', component: RegNnppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
