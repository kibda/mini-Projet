import { Injectable } from '@angular/core';
import { Pack } from '../model/pack';
import { Packs2 } from '../model/packs2';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacksService {
URL="http://localhost:3000/packs"
packss:Packs2[]=[

new Packs2(1,"Singapore","assets/safrat/singapore.jpg",4000,true,new Date(2021, 10, 1),["Singapore","est une cité-État d'Asie du Sud-Est. Sa superficie est de 724,2 km27. Elle comprend 63 îles, dont la principale est Pulau Ujong (584,8 km2). Cette île est très densément urbanisée, mais la végétation luxuriante – même en plein centre-ville – a valu à Singapour le surnom de « ville jardin ». Cette abondance de verdure découle en partie d'un climat équatorial, uniformément chaud et orageux tout au long de l'année. Sa densité de population est la deuxième plus élevée au monde parmi les États indépendants (après Monaco). L'État de Singapour est situé à l'extrême sud de la péninsule Malaise, dont il est séparé au nord par le détroit de Johor, et borde au sud le détroit de Singapour."]
,false,true,true,"villa","assets/singaporeSearch.jpg","assets/singaporeP3.jfif",20),

new Packs2(2,"california","assets/safrat/california.jpg",5000,true,new Date(2021, 12, 4),
["California"," est un État des États-Unis qui fait partie de la région de la Sun Belt dans l’Ouest américain. Avec 39 538 223 habitants selon le recensement officiel de 20202, la Californie est l'État le plus peuplé du pays. Il est situé sur la côte ouest et bordé au sud par le désert de Sonora, à l'est par le Grand Bassin des États-Unis et au nord par les monts Klamath. La façade océanique suit entièrement le relief des chaînes côtières du Pacifique au-delà desquelles s'étend la Vallée Centrale sur les contreforts de la Sierra Nevada"],
false,true,true,"appartement","assets/californiaSearch.jpg","assets/californiaP3.jpg",45),

new Packs2(3,"rome","assets/safrat/rome.jpg",2500,true,new Date(2021, 9, 7),
["Rome","est la capitale de l'Italie. Située au centre-ouest de la péninsule italienne, près de la mer Tyrrhénienne, elle est également la capitale de la région du Latium. En 2019, elle compte 2 844 395 habitants établis sur 1 285 km2, ce qui fait d'elle la commune la plus peuplée d'Italie et la troisième plus étendue d'Europe après Moscou et Londres3. Son aire urbaine recense 4 356 403 habitants en 20164,5. Elle présente en outre la particularité de contenir un État enclavé dans son territoire : la cité-État du Vatican (Stato della Città del Vaticano), dont le pape est le souverain. C'est le seul exemple existant d'un État à l'intérieur d'une ville."],
true,true,false,"appartement","assets/romeSearch.jpg","assets/romeP3.jpg",70),

new Packs2(4,"vietnam","assets/safrat/bali.jpg",3978,true,new Date(2021, 7, 19),
["Vietnam","est un pays d'Asie du Sud-Est, situé à l'est de la péninsule indochinoise. Il fait également partie de la sinosphère (sphère culturelle chinoise), aussi appelée sphère culturelle d'Asie de l'Est. Pendant plus d'un millénaire le Vietnam a été sous domination chinoise. Tout commença à partir de -111 av. J.-C. lorsque la dynastie Han s'empara du Nam Việt. Le Nam Việt ou Nanyue en chinois comprenait alors les provinces actuelles du Yunnan, du Guangxi et du Guangdong. La culture vietnamienne possède par conséquent de nombreux traits culturels communs avec la Chine, la Corée et le Japon. Depuis la conquête du royaume de Champa par l'empereur Lê Thanh Tông en 1471, le pays a hérité également de nombreux temples rattachés à l'indouïsme."],
true,true,false,"hotel","assets/vietnamSearch.jpg","assets/vietnamP3.jpg",70),

new Packs2(5,"canne","assets/safrat/canne.jpg",3600,false,new Date(2021, 10, 1),
["Canne","est une commune française de la communauté d'agglomération Cannes Pays de Lérins située dans le département des Alpes-Maritimes, en région Provence-Alpes-Côte d'Azur, sur la Côte d'Azur dont elle est une ville phare. Ses habitants sont appelés les Cannois(es) en français et les canenc(a) en provençal (prononcé localement canenc et canenco). Village de pêcheurs ligure pendant l’Antiquité, liée aux légendes de saint Honorat et de l’homme au masque de fer sur les îles de Lérins au large de la baie de Cannes, station climatique et balnéaire de la Côte d'Azur au xixe siècle, la ville prend son essor avec la construction de résidences de villégiature par les aristocrates anglais et russes puis, dès le début du xxe siècle, d'hôtels de luxe destinés aux touristes fortunés, constituant son patrimoine architectural. "],
true,true,true,"villa","assets/canneSearch.jpg","assets/canneP3.jpg",0)




  ];

  constructor(private http:HttpClient) { }

  getPacksHttp():Observable<Packs2[]>{
    return this.http.get<Packs2[]>(this.URL);}

  getPacks(){
    return this.packss;}
//get id Client
    getpackIdHttp(id:number):Observable<Packs2>{
    
      return this.http.get<Packs2>(this.URL+"/"+id); 
    } 

    getpackId(id:number){
    
      return this.packss.find(e => e.id==id) ;
    }


//afficher promo 
afficherPromoHttp():Observable<Packs2[]>{

  return  this.http.get<Packs2[]>(this.URL+"?"+"enpromo=true");  
} 

  afficherPromo(){
    let p:Packs2[]=[];
    p=this.packss.filter(e=>e.enpromo==true);
    return p;
  }  

  afficherPackDate(date:Date){
    
    let p:Packs2[]=[];
    p=this.packss.filter(e=>e.dateDep>=date);
    return p;
  }   

  afficherPackPlace(place:string){
   
    let p:Packs2[]=[];
    p=this.packss.filter(e=>e.libelle==place);
    return p;

  }

  affPackPD(date:Date,place:string):Observable<Packs2[]>{  

     return  this.http.get<Packs2[]>(this.URL+"?dateDep>="+date+"&libelle="+place); 
    

  }


  //remove pack
  removePackHttp(id:number):Observable<Packs2>{
return this.http.delete<Packs2>(this.URL+"/"+id);
  }


  removePack(id:number){
    let index=this.packss.findIndex((e)=>e.id===id);
    if(index!== -1){
      this.packss.splice(index,1);
    }
  }


  // ajouter prod
  addPackHttp(p:Packs2):Observable<Packs2>{
return this.http.post<Packs2>(this.URL,p);
  }

  addPack(p:Packs2){
    let p1=Object.assign({},p);
    this.packss.push(p1);
  }


  //modif pack
  modifPackHttp(p:Packs2,id:number):Observable<Packs2>{
    return this.http.put<Packs2>(this.URL+"/"+id,p);
  }

  


}

/*new Packs2(1,"Singapore","assets/safrat/singapore.jpg",3978,true,new Date(2021, 09, 29),
["Singapore","Singapore"]
,false,true,true,"villa"
),

new Packs2(2,"california","assets/safrat/california.jpg",3978,true,new Date(2021,09,29),
["California","California"],
false,true,true,"appartement"),

new Packs2(3,"rome","assets/safrat/rome.jpg",3978,true,new Date(2021,11,29),
["Rome","Rome"],
true,true,false,"appartement"),

new Packs2(4,"vietnam","assets/safrat/vietnam2.jpg",3978,true,new Date(2021,10,29),
["vietnam","Vietnam"],
true,true,false,"hotel"),

new Packs2(5,"canne","assets/safrat/canne2.jpg",3978,true,new Date(2021,12,29),
["canne","Cannes "],
true,true,true,"villa")





new Pack(1,"Singapore","assets/safrat/singapore.jpg",3978,true,new Date(2021, 09, 29),
["Singapore","Singapore"]
,false,true,true,"villa"
),

new Pack(2,"california","assets/safrat/california.jpg",3978,true,new Date(2021,09,29),
["California","California"],
false,true,true,"appartement"),

new Pack(3,"rome","assets/safrat/rome.jpg",3978,true,new Date(2021,11,29),
["Rome","Rome"],
true,true,false,"appartement"),

new Pack(4,"vietnam","assets/safrat/vietnam2.jpg",3978,true,new Date(2021,10,29),
["vietnam","Vietnam"],
true,true,false,"hotel"),

new Pack(5,"canne","assets/safrat/canne2.jpg",3978,true,new Date(2021,12,29),
["canne","Cannes "],
true,true,true,"villa"),*/

