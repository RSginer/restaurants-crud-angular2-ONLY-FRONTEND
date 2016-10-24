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
    public error;

constructor(private _restaurantesService: RestaurantesService,
            private _router: Router){}
    

    onSubmit(){
        this._restaurantesService.addRestaurante(this.restaurante)
        .subscribe(
            res => {
                alert("Restaurante añadido correctamente ");
            },
            error => {
                alert("Error al añadir restaurante");
                this.error = <any>error;
                this._router.navigate(['Home']);
                console.error("ERROR: " + error.status);
                console.info("INFORMACION DEL ERROR");
                console.info(error._body);
            }
        );
    }

    ngOnInit() {
        this.restaurante=new Restaurante(null,null,null,null,null,null);
    }
}