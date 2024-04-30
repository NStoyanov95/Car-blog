import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationsComponent } from './car/publications/publications.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PublicationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
