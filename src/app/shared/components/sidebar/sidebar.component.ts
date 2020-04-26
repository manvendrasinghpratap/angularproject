import { Component, OnInit } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: Menu[];
  fullName: string;
  userType: string;
  constructor(public _nanservice: NavService) {
    this.menuItems = this._nanservice.MENUITEMS;
  }

  ngOnInit(): void {
    this.fullName = 'Manvendra Pratap Singh';
    this.userType = 'Admin';
  }
  // Click toggle menu
  toggleNavActive(item: any) {
    item.active = !item.active;
  }
}
