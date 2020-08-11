import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Dashboard',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Cool Frameworks',
      children: [
        {
          title: 'AMO',
          url: '/menu/amo',
          icon: 'person'
        },
        {
          title: 'Diagnostic/Lab',
          url: '/menu/labs',
          icon: 'flask'
        },
        {
          title: 'Hospital',
          url: '/menu/hospitals',
          icon: 'business'
        },
        {
          title: 'Nursing Home',
          url: '/menu/nursing-home',
          icon: 'medkit'
        },
        {
          title: 'Doctors',
          url: '/menu/doctors',
          icon: 'person'
        }
      ]
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
