// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {RouteParams, Router} from "angular2/router";
@Component({
    selector: 'error',
    templateUrl: 'app/view/error.html'
})

 
// Clase del componente donde iran los datos y funcionalidades
export class ErrorComponent {
    public titulo:string = "Error 404";
 }