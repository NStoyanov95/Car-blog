import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { BlogModule } from "./blog/blog.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./blog/home/home.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    BlogModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
