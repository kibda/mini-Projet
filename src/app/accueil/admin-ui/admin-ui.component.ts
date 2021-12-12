import { Component, OnInit } from '@angular/core';
import { Packs2 } from 'src/app/model/packs2';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUIComponent implements OnInit {
  pac:Packs2[]=[];
  search:string="";
  packk:Packs2=new Packs2(0,"","",0,false,new Date(2021, 10, 1),["",""],false,false,false,"","","",0);
  clickB:boolean=false;

  constructor(private pacserv:PacksService) { }

  ngOnInit(): void {
  //  this.pac=this.pacserv.getPacks();
    this.pacserv.getPacksHttp().subscribe(data=>this.pac=data);
  }

Fid(id:number){

this.packk=this.pac.find(e=>e.id==id);
this.clickB=true;
}


removep(id:number){

  //this.pacserv.removePack(id);
  this.pacserv.removePackHttp(id).subscribe(()=>this.pac=this.pac.filter(e=>e.id!=id))
}


searching(){
  if(this.search!=""){
  this.pac=this.pac.filter(e=>e.libelle.toLocaleLowerCase().match(this.search.toLocaleLowerCase()));}
  else if(this.search==""){
this.ngOnInit();
  }
}

modifPack(id:number,p:Packs2){
  this.pacserv.modifPackHttp(p,id).subscribe()
}

prixAp(prix:number,pourcentage:number){


  return prix-(prix*pourcentage/100);


}




}
