import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  header = {
    brandUrl: '/private',
    brand: 'Spotify App',
    logo: 'assets/logo.png',
    options: [
      { title: 'Buscar', url: '/private/search' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
