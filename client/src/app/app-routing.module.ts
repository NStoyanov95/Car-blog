import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicationsComponent } from "./blog/publications/publications.component";
import { HomeComponent } from "./blog/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "publications", component: PublicationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
