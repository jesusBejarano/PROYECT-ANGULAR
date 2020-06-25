import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { HeaderOption } from '@spotify/commons/interfaces/header-option';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class SptHeaderComponent implements OnInit {
  @Input() brandUrl: string;
  @Input() brand: string;
  @Input() logo: string;
  @Input() options: HeaderOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
