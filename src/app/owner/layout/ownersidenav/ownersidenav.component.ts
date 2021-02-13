import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-ownersidenav',
  templateUrl: './ownersidenav.component.html',
  styleUrls: ['./ownersidenav.component.scss']
})
export class OwnersidenavComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  name = this.a[0].owner_name;
  tid = 55;

  constructor() { }

  ngOnInit() {
    // $(document).ready(() => {
    //   $('.sidebar-menu').tree();
    // });
    $(document).ready(() => {
      $('.sidebar-toggle').on('click', () => {

        const cls =  $('body').hasClass('sidebar-collapse');
        if (cls === true) {
             $('body').removeClass('sidebar-collapse');
        } else {
             $('body').addClass('sidebar-collapse');
        }

      });
    });
  }

}
