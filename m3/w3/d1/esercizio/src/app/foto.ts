import { IFoto } from "./ifoto"

export class Foto implements IFoto{
    albumId!:string
    id!:number
    title!:string
    url!:string
    constructor(){}
}
