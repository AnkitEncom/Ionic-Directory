import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch : 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'main', loadChildren: '../main/main.module#MainPageModule' },
      { path: 'doctors', loadChildren: '../doctors/doctors.module#DoctorsPageModule' },
      { path: 'amo', loadChildren: '../amo/amo.module#AmoPageModule' },
      { path: 'labs', loadChildren: '../labs/labs.module#LabsPageModule' },
      { path: 'hospitals', loadChildren: '../hospitals/hospitals.module#HospitalsPageModule' },
      { path: 'nursing-home', loadChildren: '../nursing-home/nursing-home.module#NursingHomePageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
