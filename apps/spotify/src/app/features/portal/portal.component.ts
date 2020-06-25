import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  header = {
    brandUrl: '',
    brand: 'Music App',
    logo: 'assets/logo.png',
    options: [
      { title: 'Premium', url: '/portal/premium' },
      { title: 'Ayuda', url: '/portal/help' },
      { title: 'Iniciar Sesión', url: '/portal/login' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
