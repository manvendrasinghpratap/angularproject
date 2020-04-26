import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FeathersIconsComponent } from './components/feathers-icons/feathers-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations:
    [
      BreadcrumbComponent,
      FeathersIconsComponent,
      FooterComponent,
      HeaderComponent,
      ContentLayoutComponent,
      SidebarComponent,

    ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FeathersIconsComponent
  ]
})
export class SharedModule { }
