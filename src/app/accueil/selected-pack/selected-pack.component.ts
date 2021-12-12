import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Packs2 } from 'src/app/model/packs2';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-selected-pack',
  templateUrl: './selected-pack.component.html',
  styleUrls: ['./selected-pack.component.css']
})
export class SelectedPackComponent implements OnInit {
identifiant:number=0;
//pack:Packs2=new Packs2(0,"","",0,false,new Date(2021, 10, 1),["",""],false,false,false,"","","",0);
pac:Packs2[]=[];
packs:any;

  constructor(private actrt:ActivatedRoute,private pacserv:PacksService) { }

  ngOnInit(): void {
this.identifiant=this.actrt.snapshot.params['id'];
this.pacserv.getPacksHttp().subscribe(data=>this.pac=data);

this.pacserv.getpackIdHttp(this.identifiant).subscribe(data=>this.packs=data);
 
 

  }




}
