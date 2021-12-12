import { Component, Input, OnInit } from '@angular/core';
import { Pack } from 'src/app/model/pack';
import { Packs2 } from 'src/app/model/packs2';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-packpromo',
  templateUrl: './packpromo.component.html',
  styleUrls: ['./packpromo.component.css']
})
export class PackpromoComponent implements OnInit {

  constructor(private pacserv:PacksService) { }
  pac:Packs2[]=[];
  packs:Packs2[]=[];

  ngOnInit(): void {
  //  this.pacserv.getPacksHttp().subscribe(data=>data=this.pac);
  //  this.pac=this.pacserv.afficherPromo();
    this.pacserv.afficherPromoHttp().subscribe(data=>this.pac=data);
  }

  prixApres(prix:number,pourcentage:number){
    return prix-(prix*pourcentage/100);


  }




}


