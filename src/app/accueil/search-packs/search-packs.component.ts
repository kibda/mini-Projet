import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { Packs2 } from 'src/app/model/packs2';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-search-packs',
  templateUrl: './search-packs.component.html',
  styleUrls: ['./search-packs.component.css']
})
export class SearchPacksComponent implements OnInit {
dest:string="";
date:Date=new Date();

  constructor(private pacserv:PacksService,private actrout:ActivatedRoute) { }
  pac:Packs2[]=[];

 
  ngOnInit(): void {
   
    this.dest = this.actrout.snapshot.params['destin'];
    this.date = this.actrout.snapshot.params['datedest'];
    this.pacserv.affPackPD(this.date,this.dest).subscribe(data=>this.pac=data);
    console.log(this.dest);
    console.log(this.date);
  }



  

}
