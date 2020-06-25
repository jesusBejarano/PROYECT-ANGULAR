import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { SearchArtistComponent } from './views/search-artist/search-artist.component';
import { privateComponentsModule } from './commons/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SptErrorsInterceptorModule } from '@spotify/commons/interceptors';
import { SptAuthHttpModule } from '@spotify/commons/http/auth';
import { SptServiceHttpModule } from '@spotify/commons/http/spotify';
import { SptHeaderModule, SptBannerModule } from '@spotify/commons/components';
import { MatDialogModule } from '@angular/material/dialog';
import { PrivateCommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [
    PrivateComponent,
    ArtistDetailComponent,
    NewReleasesComponent,
    SearchArtistComponent

  ],
  imports: [
    CommonModule,
    PrivateCommonsModule,
    PrivateRoutingModule,
    ReactiveFormsModule,


    MatDialogModule

  ]
})
export class PrivateModule { }
