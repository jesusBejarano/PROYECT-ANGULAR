import { Component, OnInit } from '@angular/core';
import { HelpPresenter} from './help.presenter'

@Component({
  selector: 'app-help',
  templateUrl: './help.view.html',
  styleUrls: ['./help.view.scss'],
  providers:[HelpPresenter]
})
export class HelpView implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
