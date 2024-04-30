import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicationsComponent } from './publications/publications.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PublicationsComponent],
  imports: [CommonModule, SharedModule, MatCardModule],
  exports: [PublicationsComponent],
})
export class CarModule {}
