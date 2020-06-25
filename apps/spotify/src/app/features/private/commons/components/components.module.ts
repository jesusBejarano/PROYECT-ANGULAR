import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MusicItemComponent } from './music-item/music-item.component';



@NgModule({
    declarations: [MusicItemComponent ],
    exports: [MusicItemComponent  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class privateComponentsModule {}
