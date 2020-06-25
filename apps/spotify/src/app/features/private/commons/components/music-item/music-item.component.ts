import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '@spotify/commons/interfaces/album-response.interface';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss']
})
export class MusicItemComponent implements OnInit {
  @Input() img: string;
  @Input() name: string;
  @Input() artists: Artist[] = [];
  @Output() goArtist: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
}
