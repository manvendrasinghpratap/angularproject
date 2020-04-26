import { Injectable } from '@angular/core';

// menu
export interface Menu {
  path?: string;
  title: string;
  icon?: string;
  type?: string;
  active?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})



export class NavService {

  constructor() { }
  collapsSidebar: boolean = false;

  MENUITEMS: Menu[] = [
    { path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', active: true },
    {
      title: 'Products', icon: 'box', type: 'sub', active: false, children: [
        {
          title: 'Physical', type: 'sub', children: [
            { path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
            { path: '/products/physical/list-product', title: 'List Product', type: 'link' },
          ]
        }
      ]
    },
    {
      title: 'Sales', icon: 'dollar-sign', type: 'sub', active: false, children: [
        { path: '/sales/order', title: 'Sales Order', type: 'link' },
        { path: '/sales/transaction', title: 'Sales Transaction', type: 'link' }
      ]
    },
    {
      title: 'Masters', icon: 'clipboard', type: 'sub', active: false, children: [
        { path: '/masters/category', type: 'link', title: 'Category' },
        { path: '/masters/color', type: 'link', title: 'Color' },
        { path: '/masters/tag', type: 'link', title: 'Tag' },
        { path: '/masters/size', type: 'link', title: 'Size' },
        { path: '/masters/brandlog', type: 'link', title: 'Brandlog' },
        { path: '/masters/usertype', type: 'link', title: 'Usertype' },
      ]
    },
    {
      title: 'Users', icon: 'user', type: 'sub', active: false, children: [
        { path: '/users/create-user', title: 'Create New User', type: 'link', icon: 'settings' },
        { path: '/users/list-user', title: 'User List', type: 'link', icon: 'settings' }
      ]
    },
    { path: '/reports', title: 'Reports', icon: 'bar-chart', type: 'link', active: false },
    {
      title: 'Settings', icon: 'settings', type: 'sub', active: false, children: [
        { path: '/settings/profile', title: 'Profile Setting', type: 'link', icon: 'settings' }
      ]
    },
    { path: '/invoice/', title: 'Invoice', icon: 'archive', type: 'link', active: false },
    { path: '/auth/logout/', title: 'Logout', icon: 'log-out', type: 'link', active: false }
  ];
}
