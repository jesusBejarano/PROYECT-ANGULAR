import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SptBannerComponent } from './banner.component';



@NgModule({
  declarations: [SptBannerComponent],
  exports:[SptBannerComponent],
  imports: [
    CommonModule
  ]
})
export class SptBannerModule { }
