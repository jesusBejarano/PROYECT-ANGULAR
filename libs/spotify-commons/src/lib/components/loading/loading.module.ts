import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SptLoadingComponent } from './loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SptLoadingComponent],
  exports: [SptLoadingComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SptLoadingModule { }
