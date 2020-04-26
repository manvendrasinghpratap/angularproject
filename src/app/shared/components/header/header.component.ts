import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _navService: NavService) { }

  open: boolean = false;
  openNav: boolean = false;
  isOpenMobile: boolean = false;
  ngOnInit(): void {
  }
  collapseSidebar() {
    this.open = !this.open;
    this._navService.collapsSidebar = !this._navService.collapsSidebar;
  }
  openMobileNav() {
    this.isOpenMobile = !this.isOpenMobile;
  }

}
