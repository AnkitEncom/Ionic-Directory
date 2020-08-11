import { Component, OnInit } from '@angular/core';
import { ChssDataService } from 'src/app/Services/chss-data.service';
import { Chss } from 'src/app/models/chss.models';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  lstdoctors: Chss[] = [] ;
  txtFilter = '';
  constructor(private objService: ChssDataService) { }

  ngOnInit() {
    this.getDoctorsList();
  }
  getDoctorsList() {
    this.objService.getDoctorsList()
    .subscribe(
      res => {this.lstdoctors = res; },
      err => console.log(err)
    );
  }
  filterDoctors( event ) {
    const texto = event.target.value;
    this.txtFilter = texto;
  }
}
