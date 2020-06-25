import { Injectable } from '@angular/core';
import { SptServiceHttp } from '@spotify/commons/http/spotify';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '@spotify/commons/interfaces/album-response.interface';
import { Track } from '@spotify/commons/interfaces/track.interface';
import { MatDialog } from '@angular/material/dialog';
import { SptLoadingComponent } from '@spotify/commons/components';
import { finalize } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable()
export class ArtistDetailPresenter {
  artist: Artist;
  tracks: Track[] = [];

  constructor(
    private spotify: SptServiceHttp,
    private activatedRoute: ActivatedRoute,
    private dialog:MatDialog
    ) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.spotify.getArtist(id)

      const loading = this.dialog.open(SptLoadingComponent, { disableClose: true });

      forkJoin({
        artist:this.spotify.getArtist(id),
        tracks:this.spotify.getArtistTracks(id)
      })
      .pipe(finalize(() => loading.close()))
      .subscribe(
        ({artist,tracks})=>{
          this.artist=artist;
          this.tracks=tracks;
        },
        (err)=>{
          console.log(err)
        }
      );



    }

}
