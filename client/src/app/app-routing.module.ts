import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicationsComponent } from "./blog/publications/publications.component";
import { HomeComponent } from "./blog/home/home.component";
import { ReviewsComponent } from "./blog/reviews/reviews.component";
import { NewsComponent } from "./blog/news/news.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "publications", component: PublicationsComponent },
  { path: "reviews", component: ReviewsComponent },
  { path: "news", component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
