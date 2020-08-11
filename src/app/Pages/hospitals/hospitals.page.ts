import { Component, OnInit } from '@angular/core';
import { ChssDataService } from 'src/app/Services/chss-data.service';
import { Chss } from 'src/app/models/chss.models';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {
  lstHospital: Chss[] = [] ;
  txtFilter = '';
  constructor(private objService: ChssDataService) { }

  ngOnInit() {
    this. getHospitalList();
  }
  getHospitalList() {
    this.objService.getHospitalList()
    .subscribe(
      res => {this.lstHospital = res; },
      err => console.log(err)
    );
  }
  filterHospital( event ) {
    const texto = event.target.value;
    this.txtFilter = texto;
  }
}
