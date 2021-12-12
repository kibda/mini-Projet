import { Component, OnInit } from '@angular/core';
import { Pack } from 'src/app/model/pack';
import { Packs2 } from 'src/app/model/packs2';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

img:string='assets/final.jpg';
book:string='assets/booktrav/travelserach.jpg';
packs:Packs2[]=[];
 logo:string='assets/logo/transbtt.png';
 abtus:string="assets/aboutUs.jpg";

 dateSearch:Date=new Date();
 placeSearch:string="";


  constructor(private packserv:PacksService) { }

  ngOnInit(): void {

   // this.packs=this.packserv.getPacks();
    this.packserv.getPacksHttp().subscribe(data=>data=this.packs);

  }

  




}
