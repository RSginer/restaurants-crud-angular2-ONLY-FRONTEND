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
    
    /*
    * Modelo de datos:
    *      [
    *       {
                "id":1,
                "nombre":"Burger King",
                "direccion":"Calle tal y cual",
                "descripcion":"tal y cual",
                "precio":"100000"}
            }
           ]
    */
    public restaurantes: Restaurante[];
    public error:string;
    public mensajeDeError:string

    constructor(private _servicioRestaurantes: RestaurantesService){}
    
    

    ngOnInit(){
        console.log("restaurantes-list component cargando");
        this.getRestaurantes();
    }

    getRestaurantes(){
        this._servicioRestaurantes.getRestaurantes()
            .subscribe(
                restaurantes => {
                    this.restaurantes=restaurantes;
                    console.log(this.restaurantes);
                },
                error => {
                    this.error = <any> error;
                    console.log(JSON.stringify(error) + " este es el error");
                }
            );
    }

 }