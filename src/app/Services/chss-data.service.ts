import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Chss} from '../models/chss.models';
@Injectable({
  providedIn: 'root'
})
export class ChssDataService {
 private apiUrl: any = 'https://elearning.iirs.gov.in/chssApi/public/api/';
  constructor( private objHTTP: HttpClient) { }
    // To Get AMO
    getAMOList() {
      return this.objHTTP.get<Chss[]>(this.apiUrl + `amo`);
    }
    // To Get Lab
    getLabList() {
      return this.objHTTP.get<Chss[]>(this.apiUrl + `labs`);
    }
     // To Get Hospital
     getHospitalList() {
      return this.objHTTP.get<Chss[]>(this.apiUrl + `hospital`);
    }
     // To Get Nursing Home
     getNursingHomeList() {
      return this.objHTTP.get<Chss[]>(this.apiUrl + `nursinghome`);
    }
     // To Get Doctors
     getDoctorsList() {
      return this.objHTTP.get<Chss[]>(this.apiUrl + `doctors`);
    }
     // To Get Lat Long
     getLatLong() {
      return this.objHTTP.get<Chss[]>(this.apiUrl + `latlong`);
    }
}
