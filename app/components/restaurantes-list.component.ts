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
export class RestaurantesListComponent implements OnInit {
    public titulo: string = "Listado de restaurantes";
    public restaurantes: Restaurante[];
    public error: string;
    public mensajeDeError: string
    public loading: boolean = true;
    public confirmado;

    constructor(private _servicioRestaurantes: RestaurantesService) { }



    ngOnInit() {
        this.getRestaurantes();
    }

    onBorrarRestaurante(id: number) {
        this.confirmado=id;
    }

    confirmedBorrarRestaurante() {
        this.loading = true;
        this._servicioRestaurantes.removeRestaurante(this.confirmado).subscribe(
            res => {
                this.getRestaurantes();
            }, error => {
                alert("Ocurrio un error al borrar el restaurante");
            }
        );
        this.confirmado=null;
    }

    getRestaurantes() {
        this._servicioRestaurantes.getRestaurantes()
            .subscribe(
            res => {
                this.restaurantes = res;
                if(res  == undefined){
                    
                }
                this.loading = false;
            },
            error => {
                this.error = <any>error;
                if(error.status == 200){
                   error.status=401;
               }
               let exceptions:string[] = error._body.split(":");
               let exception:string = exceptions[1];
               exception=exception.substring(1,exception.length);
               console.info(exception);
                if(exception === "com.mysql.jdbc.exceptions.jdbc4.CommunicationsException"){
                    alert("Error al conectar con la base de datos");
                    error.status=503;
                }
                console.error("ERROR: " + error.status + " - " + exception);
                console.info("INFORMACION DEL ERROR");
                console.info(error._body);
            }
            );
    }

}