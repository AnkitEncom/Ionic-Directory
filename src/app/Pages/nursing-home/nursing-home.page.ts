import { Component, OnInit } from '@angular/core';
import { ChssDataService } from 'src/app/Services/chss-data.service';
import { Chss } from 'src/app/models/chss.models';

@Component({
  selector: 'app-nursing-home',
  templateUrl: './nursing-home.page.html',
  styleUrls: ['./nursing-home.page.scss'],
})
export class NursingHomePage implements OnInit {
  lstnusinghome: Chss[] = [] ;
  txtFilter = '';
  constructor(private objService: ChssDataService) { }

  ngOnInit() {
    this.getNursingHomeList();
  }
  getNursingHomeList() {
    this.objService.getNursingHomeList()
    .subscribe(
      res => {this.lstnusinghome = res; },
      err => console.log(err)
    );
  }
  filterNursingHome( event ) {
    const texto = event.target.value;
    this.txtFilter = texto;
  }
}
