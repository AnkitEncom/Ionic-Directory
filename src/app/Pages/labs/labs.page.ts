import { Component, OnInit } from '@angular/core';
import { ChssDataService } from 'src/app/Services/chss-data.service';
import { Chss } from 'src/app/models/chss.models';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.page.html',
  styleUrls: ['./labs.page.scss'],
})
export class LabsPage implements OnInit {
  lstLabs: Chss[] = [] ;
  txtFilter = '';
  constructor(private objService: ChssDataService) { }

  ngOnInit() {
    this.getLabList();
  }
  getLabList() {
    this.objService.getLabList()
    .subscribe(
      res => {this.lstLabs = res; },
      err => console.log(err)
    );
  }
  filterLabs( event ) {
    const texto = event.target.value;
    this.txtFilter = texto;
  }
}
