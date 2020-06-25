import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SptServiceHttp } from '@spotify/commons/http/spotify';
import { Router } from '@angular/router';
import { Artist } from '@spotify/commons/interfaces/album-response.interface';
import { MatDialog } from '@angular/material/dialog';
import { SptLoadingComponent } from '@spotify/commons/components';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SearchArtistPresenter {
  formSearch: FormGroup;
  artists: Artist[] = [];
  constructor(
    private fb: FormBuilder,
    private spotify: SptServiceHttp,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.formSearch = this.fb.group({
      q: ['', Validators.required]
    });
  }

  search() {
    if (this.formSearch.valid) {
      const loading = this.dialog.open(SptLoadingComponent, { disableClose: true });
      this.spotify.searchArtists(this.formSearch.value.q)
        .pipe(finalize(() => loading.close()))
        .subscribe(
          res => this.artists = res.artists.items,
          err => console.log(err)
        );
    }
  }

  goArtist(id: string) {
    this.router.navigate(['/private/artist-detail', id]);
    // this.router.navigateByUrl('');
  }

}
