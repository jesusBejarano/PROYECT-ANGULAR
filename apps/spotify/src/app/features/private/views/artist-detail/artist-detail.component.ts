import { Component, OnInit } from '@angular/core';


import { ArtistDetailPresenter } from './artist-detail.presenter';



@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
  providers:[ArtistDetailPresenter]
})
export class ArtistDetailComponent implements OnInit {


  constructor(
    public presenter:ArtistDetailPresenter
  ) { }

  ngOnInit() {
    return this.presenter.ngOnInit()
  }

}
