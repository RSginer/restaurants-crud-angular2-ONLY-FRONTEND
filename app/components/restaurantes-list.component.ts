// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../model/Restaurante";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: 'app/view/restaurantes-list.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [RestaurantesService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent implements OnInit{
    public titulo:string = "Lista de restaurantes";
    public restaurantes: Restaurante[];
    public status:string;
    public mensajeDeError:string
    constructor(private _servicioRestaurantes: RestaurantesService){}
       

    ngOnInit(){
        console.log("restaurantes-list component cargando");
    }

    getRestaurantes(){
        this._servicioRestaurantes.getRestaurantes()
            .subscribe(
                result => {
                    this.restaurantes=result.data;
                    this.status=result.status;
                    if(this.status != "success"){
                        alert("Error en el servidor");
                    }
                },
                error => {
                    this.mensajeDeError= <any>error;
                    if(this.mensajeDeError != null){
                        console.log(this.mensajeDeError);
                        alert("Error en la peticion");
                    }
                }
            );
    }

 }