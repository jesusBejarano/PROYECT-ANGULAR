import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SptHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SptHeaderComponent],
  exports:[SptHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SptHeaderModule { }
