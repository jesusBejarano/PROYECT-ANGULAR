import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from './private.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { ArtistDetailComponent } from './views/artist-detail/artist-detail.component';
import { SearchArtistComponent } from './views/search-artist/search-artist.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent ,
    children: [
      { path: '', component: NewReleasesComponent },
      { path: 'artist-detail/:id', component: ArtistDetailComponent },
      { path: 'search', component: SearchArtistComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
