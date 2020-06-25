import { Injectable } from '@angular/core';
import { SptServiceHttp } from '@spotify/commons/http/spotify';
import { Router } from '@angular/router';
import { Album } from '@spotify/commons/interfaces/album-response.interface';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SptLoadingComponent } from '@spotify/commons/components';

@Injectable(

)
export class NewReleasePresenter {
  albums: Album[] = [];
  constructor(
    private spotify: SptServiceHttp,
    private router: Router,
    private dialog:MatDialog
    ) { }

    ngOnInit(): void {
      const loading = this.dialog.open(SptLoadingComponent, { disableClose: true });
      this.spotify.getNewReleases()
      .pipe(finalize(() => loading.close()))
      .subscribe(
        albums => this.albums = albums,
        err => console.log(err),
      );
    }

    goArtist(id: string) {
      this.router.navigate(['/private/artist-detail', id]);
      // this.router.navigateByUrl('');
    }

}
