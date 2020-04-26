import { Component, OnInit, Input } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-feathers-icons',
  templateUrl: './feathers-icons.component.html',
  styleUrls: ['./feathers-icons.component.scss']
})
export class FeathersIconsComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line: no-input-rename
  @Input('icon') public feathericon;
  ngOnInit(): void {
    feather.replace();
  }

}
