import {Component, OnInit} from "angular2/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "add-restaurante",
    templateUrl: "app/view/add-restaurante.html",
    providers: [RestaurantesService]
})
export class AddRestaurantesComponent implements OnInit {
    public titulo = "Formulario para añadir restaurante";
    public restaurante:Restaurante;


constructor(){}

    ngOnInit() {
        this.restaurante=new Restaurante(null,null,null,null,null,null);
    }
}