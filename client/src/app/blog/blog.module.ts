import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { PublicationsComponent } from "./publications/publications.component";

import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from './reviews/reviews.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [PublicationsComponent, HomeComponent, ReviewsComponent, NewsComponent],
  imports: [CommonModule, SharedModule, MatCardModule],
  exports: [PublicationsComponent, HomeComponent],
})
export class BlogModule {}
