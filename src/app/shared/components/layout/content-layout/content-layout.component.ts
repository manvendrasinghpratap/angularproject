import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NavService } from 'src/app/shared/services/nav.service';
@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  constructor(public _navService: NavService) { }

  ngOnInit(): void {
    /* console.log('xxxxxxxxx');
    alert(8);
    Swal.fire('ddddddddd')
 */  }


}
