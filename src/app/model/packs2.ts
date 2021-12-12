export class Packs2 {
    constructor(
        public id:number,
        public libelle:string,
        public photo:string,
        public prix:number,
        public enpromo:boolean,
        public dateDep:Date,
        public tabinfo:string[],
        public excurs:boolean,
        public food:boolean,
        public activite:boolean,
        public masken:string,
        public photo2:string,
        public photo3:string,
        public poucentagePromo:number
    ){}
}
