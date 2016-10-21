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
    public error:string;
    public mensajeDeError:string
    public loading:boolean = true;
    
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
                    this.loading=false;
                },
                error => {
                    this.error = <any> error;
                    console.log("Ocurrio un error :" + JSON.stringify(error));
                }
            );
    }

 }