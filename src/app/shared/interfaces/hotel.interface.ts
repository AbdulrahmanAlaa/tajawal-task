export interface Hotel{
    name:string;
    price:number;
    city:string;
    availability:Array<{from,to}>
}