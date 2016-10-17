export class Restaurante{
    public id:number;
    public nombre:string;
    public direccion:string;
    public descripcion:string;
    public imagen:string;
    public precio:string;
    
    constructor(
        id:number,
        nombre:string,
        direccion:string,
        descripcion:string,
        imagen:string,
        precio:string
    ){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.imagen=imagen;
        this.precio=precio;
    }
}