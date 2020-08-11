import { Component, OnInit } from '@angular/core';
import { ChssDataService } from 'src/app/Services/chss-data.service';
import { Chss } from 'src/app/models/chss.models';

@Component({
  selector: 'app-amo',
  templateUrl: './amo.page.html',
  styleUrls: ['./amo.page.scss'],
})
export class AmoPage implements OnInit {
    lstAMO: Chss[] = [] ;
    txtFilter = '';
  constructor( private objService: ChssDataService) { }

  ngOnInit() {
    this.getAMOList();
    console.log( this.lstAMO );
  }
  getAMOList() {
    this.objService.getAMOList()
    .subscribe(res => {this.lstAMO = res; } );
  }
  filterAMO( event ) {
    const texto = event.target.value;
    this.txtFilter = texto;
  }
}
