import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Packs2 } from 'src/app/model/packs2';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddPackComponent implements OnInit {
idexst:boolean=true;
succ:boolean=false;

pac:Packs2[]=[];
pacfrm:FormGroup=new FormGroup({});
  constructor(private pacserv:PacksService, private frmBuilder:FormBuilder) { }
  pack:Packs2=new Packs2(0,"","",0,false,new Date(2021, 10, 1),["",""],false,false,false,"","","",0);
  ngOnInit(): void {
  //  this.pac=this.pacserv.getPacks();
    this.pacserv.getPacksHttp().subscribe(data=>this.pac=data);
    this.pacfrm=this.frmBuilder.group({
      id:[0],
      libelle:[""],
      photo:[""],
      prix:[0],
      enpromo:[false],
      dateDep:[new Date()],
      tabinfo:this.frmBuilder.array([]),
      excurs:[false],
      food:[false],
      activite:[false],
      masken:[""],
      photo2:[""],
      photo3:[""],
       poucentagePromo:[0]



    });

  }



  onSub(){
    if(this.pacserv.getPacks().find(e=>e.id==this.pacfrm.controls.id.value) ){
      this.idexst=false;
    }
    else{
      this.succ=true;
      console.log(this.pacfrm.controls.enpromo.value)
    this.pack.id=this.pacfrm.controls.id.value;
    this.pack.libelle=this.pacfrm.controls.libelle.value;
    this.pack.photo=this.pacfrm.controls.photo.value;
    this.pack.prix=this.pacfrm.controls.prix.value;
    this.pack.enpromo=this.pacfrm.controls.enpromo.value;
    this.pack.dateDep=this.pacfrm.controls.dateDep.value;
    this.pack.tabinfo=this.pacfrm.controls.tabinfo.value;
    this.pack.excurs=this.pacfrm.controls.excurs.value;
    this.pack.food=this.pacfrm.controls.food.value;
    this.pack.activite=this.pacfrm.controls.activite.value;
    this.pack.masken=this.pacfrm.controls.masken.value;
    this.pack.photo2=this.pacfrm.controls.photo2.value;
    this.pack.photo3=this.pacfrm.controls.photo3.value;
    this.pack.poucentagePromo=this.pacfrm.controls.poucentagePromo.value;
    this.pacserv.addPackHttp(this.pack).subscribe(()=>this.pacserv.addPack(this.pack));
    
  }

  }

  get tabinfos(){
    return this.pacfrm.controls.tabinfo as FormArray;
  }

  ajouterchamp(){
    this.tabinfos.push(this.frmBuilder.control(''));
  }


}
