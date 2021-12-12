import { Component, OnInit } from '@angular/core';
import { Packs2 } from 'src/app/model/packs2';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-all-packs',
  templateUrl: './all-packs.component.html',
  styleUrls: ['./all-packs.component.css']
})
export class AllPacksComponent implements OnInit {
  pac:Packs2[]=[];

  constructor(private pacserv:PacksService) { }

  ngOnInit(): void {
   // this.pac=this.pacserv.getPacks();
    this.pacserv.getPacksHttp().subscribe(data=>this.pac=data);
    console.log(this.pac.length);
  }

  prixAp(prix:number,pourcentage:number){


    return prix-(prix*pourcentage/100);
  
  
  }

}
