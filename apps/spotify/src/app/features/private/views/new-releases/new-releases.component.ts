import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Album } from '@spotify/commons/interfaces/album-response.interface';
import { SptServiceHttp } from '@spotify/commons/http/spotify';
import { NewReleasePresenter } from './new-releases.presenter';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss'],
  providers:[NewReleasePresenter]
})
export class NewReleasesComponent implements OnInit {


  constructor(
    public presenter:NewReleasePresenter,

  ) { }

  ngOnInit(): void {
    this.presenter.ngOnInit();
  }


}
