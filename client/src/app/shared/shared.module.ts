import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { MatCardModule } from "@angular/material/card";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
  declarations: [CardComponent, SideMenuComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardComponent, SideMenuComponent],
})
export class SharedModule {}
