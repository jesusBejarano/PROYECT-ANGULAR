import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Artist } from '@spotify/commons/interfaces/album-response.interface';
import { SptServiceHttp } from '@spotify/commons/http/spotify';
import { SearchArtistPresenter } from './search-artist.presenter';


@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss'],
  providers: [SearchArtistPresenter]
})
export class SearchArtistComponent implements OnInit {


  constructor(
    public presenter: SearchArtistPresenter
  ) {

  }

  ngOnInit(){
     this.presenter.ngOnInit();
  }



}
