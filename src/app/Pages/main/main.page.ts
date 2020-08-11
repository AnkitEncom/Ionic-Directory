import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, polyline, icon } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ChssDataService } from 'src/app/Services/chss-data.service';
import { NgForOf } from '@angular/common';
import { Chss } from 'src/app/models/chss.models';
import * as L from 'leaflet';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  lstLatLong: Chss[] = [];
  lstAMO: Chss[] = [];
  lstLabs: Chss[] = [];
  lstHospital: Chss[] = [] ;
  lstnusinghome: Chss[] = [] ;
  lstdoctors: Chss[] = [] ;
  map: Map;
  marker: any;

  // Point Color
    greenIcon = new L.Icon({
    iconUrl: 'assets/icon/marker-icon-2x-green.png',
    shadowUrl: 'assets/icon/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  violetIcon = new L.Icon({
    iconUrl: 'assets/icon/marker-icon-2x-violet.png',
    shadowUrl: 'assets/icon/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  

  redIcon = new L.Icon({
    iconUrl: 'assets/icon/marker-icon-2x-red.png',
    shadowUrl: 'assets/icon/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  greyIcon = new L.Icon({
    iconUrl: 'assets/icon/marker-icon-2x-grey.png',
    shadowUrl: 'assets/icon/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  blueIcon = new L.Icon({
    iconUrl: 'assets/icon/marker-icon-2x-blue.png',
    shadowUrl: 'assets/icon/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });  
  // End 
  
  constructor( private objService: ChssDataService) { }

  ngOnInit() {
    this.getDataList();
  }
  
  getDataList() {
    this.objService.getLatLong()
    .subscribe(res => {
            this.lstLatLong = res;
            this.loadmap();
        },
        err => console.log(err));
  }
  getAllDataList() {
    this.objService.getLatLong()
    .subscribe(res => {
            this.lstLatLong = res;
            this.loadAllData();
        },
        err => console.log(err));
  }
  getAMOList(){
    this.objService.getAMOList()
    .subscribe(res=>{
      this.lstAMO=res;
      this.loadAmo();
    },
    err => console.log(err));
  }
  getLabList() {
    this.objService.getLabList()
    .subscribe(
      res => {this.lstLabs = res;
      this.loadLab();
     },
      err => console.log(err)
    );
  }
  getHospitalList() {
    this.objService.getHospitalList()
    .subscribe(
      res => {this.lstHospital = res;
      this.loadHospitals();
     },
      err => console.log(err)
    );
  }
  getNursingHomeList() {
    this.objService.getNursingHomeList()
    .subscribe(
      res => {this.lstnusinghome = res; 
      this.loadNursingHome();
    },
      err => console.log(err)
    );
  }
  getDoctorsList() {
    this.objService.getDoctorsList()
    .subscribe(
      res => {this.lstdoctors = res;
      this.loadDoctors();
     },
      err => console.log(err)
    );
  }
  ionViewDidEnter() {
    // this.loadmap();
  }
  loadmap() {
    this.map = L.map('map').setView([30.3164945, 78.0321918], 6);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    var tempIcon= new L.Icon({});
    for (const e of this.lstLatLong) {
      if(e.category == "Authorized Medical Officer (AMO)"){
        tempIcon =this.greenIcon;
      }else if(e.category == "Diagnostic/Lab"){
        tempIcon =this.violetIcon;
      }else if(e.category == "Hospital"){
        tempIcon= this.redIcon;
      }else if(e.category == "Nursing Home"){
        tempIcon= this.greyIcon;
      }
      else if(e.category == "Specialist"){
        tempIcon= this.blueIcon;
      }
      this.marker = L.marker([e.lat, e.long],{icon: tempIcon});
      this.marker.addTo(this.map)
      .bindPopup(e.name  + '<br/>' + e.address + '<br/>' + e.phone);
      this.map.setView([e.lat, e.long],13);
    }
  }
  // Load All Data on Map
  loadAllData(){
    this.map.remove();
    this.map = L.map('map').setView([30.3164945, 78.0321918], 6);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    var tempIcon= new L.Icon({});
    for (const e of this.lstLatLong) {
      if(e.category == "Authorized Medical Officer (AMO)"){
        tempIcon =this.greenIcon;
      }else if(e.category == "Diagnostic/Lab"){
        tempIcon =this.violetIcon;
      }else if(e.category == "Hospital"){
        tempIcon= this.redIcon;
      }else if(e.category == "Nursing Home"){
        tempIcon= this.greyIcon;
      }
      else if(e.category == "Specialist"){
        tempIcon= this.blueIcon;
      }
      this.marker = L.marker([e.lat, e.long],{icon: tempIcon});
      this.marker.addTo(this.map)
      .bindPopup(e.name  + '<br/>' + e.address + '<br/>' + e.phone);
      this.map.setView([e.lat, e.long],13);
    }
  }
  // Load AMO on Map
  loadAmo(){
    this.map.remove();
    this.map =  L.map('map').setView([30.3164945, 78.0321918], 6);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    for (const e of this.lstAMO) {
      this.marker = L.marker([e.lat, e.long],{icon: this.greenIcon});
      this.marker.addTo(this.map)
      .bindPopup(e.name  + '<br/>' + e.address + '<br/>' + e.phone);
      this.map.setView([e.lat, e.long],13);
    }
  }
  // Load Lab on Map
  loadLab(){
    this.map.remove();
    this.map = L.map('map').setView([30.3164945, 78.0321918], 6);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    for (const e of this.lstLabs) {
      this.marker = L.marker([e.lat, e.long],{icon: this.violetIcon});
      this.marker.addTo(this.map)
      .bindPopup(e.name  + '<br/>' + e.address + '<br/>' + e.phone);
      this.map.setView([e.lat, e.long],13);
    }
  }
  // Load Hospitals on Map
  loadHospitals(){
    this.map.remove();
    this.map = L.map('map').setView([30.3164945, 78.0321918], 6);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    for (const e of this.lstHospital) {
      this.marker = L.marker([e.lat, e.long],{icon: this.redIcon});
      this.marker.addTo(this.map)
      .bindPopup(e.name  + '<br/>' + e.address + '<br/>' + e.phone);
      this.map.setView([e.lat, e.long],13);
    }
  }
    // Load Nursing Home on Map
    loadNursingHome(){
      this.map.remove();
      this.map = L.map('map').setView([30.3164945, 78.0321918], 6);
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      for (const e of this.lstnusinghome) {
        this.marker = L.marker([e.lat, e.long],{icon: this.greyIcon});
        this.marker.addTo(this.map)
        .bindPopup(e.name  + '<br/>' + e.address + '<br/>' + e.phone);
        this.map.setView([e.lat, e.long],15);
      }
    }
     // Load Doctors Home on Map
     loadDoctors(){
      this.map.remove();
      this.map = L.map('map').setView([30.3164945, 78.0321918], 6);
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      for (const e of this.lstdoctors) {
        this.marker = L.marker([e.lat, e.long], {icon: this.blueIcon});
        this.marker.addTo(this.map)
        .bindPopup(e.name  + '<br/>' + e.address + '<br/>' + e.phone);
        this.map.setView([e.lat, e.long],15);
      }
    }
}

