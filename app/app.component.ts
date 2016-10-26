// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import {RestaurantesListComponent} from "./components/restaurantes-list.component";
import {RestauranteDetailComponent} from "./components/restaurante-detail.component";
import {AddRestaurantesComponent} from "./components/add-restaurante.component";
import {EditRestauranteComponent} from "./components/edit-restaurante.component";
import {ErrorComponent} from "./components/error.component";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/view/home.html',
        directives: [RestaurantesListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/', name:'Home', component: RestaurantesListComponent, useAsDefault: true},
    {path:'/ver-restaurante/:id', name:'Restaurante', component: RestauranteDetailComponent },
    {path:'/crear-restaurante', name:'CrearRestaurante', component: AddRestaurantesComponent},
    {path:'/editar-restaurante/:id', name:'EditarRestaurante', component:EditRestauranteComponent},
    {path:'/donde-como-hoy/:random', name:'DondeComoHoy',component:RestauranteDetailComponent},
    {path:'/error-404', name:'Error', component:ErrorComponent},
    {path:'/**', redirectTo:['Error']}
])
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo:string = "Restaurantes";
 }