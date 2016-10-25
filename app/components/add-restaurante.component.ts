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
    public titulo = "Crear un nuevo restaurante";
    public restaurante:Restaurante;
    public error;

constructor(private _restaurantesService: RestaurantesService,
            private _router: Router){}
    

    onSubmit(){
        this._restaurantesService.addRestaurante(this.restaurante)
        .subscribe(
            res => {
                 this._router.navigate(['Restaurante',{id:this.restaurante.id}]);
            },
            error => {
                alert("Error al añadir restaurante " + error.status);
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