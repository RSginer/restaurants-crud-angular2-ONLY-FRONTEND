import {Component, OnInit} from "angular2/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "edit-restaurante",
    templateUrl: "app/view/add-restaurante.html",
    providers: [RestaurantesService]
})
export class EditRestauranteComponent implements OnInit {
    public titulo = "Editar restaurante";
    public restaurante: Restaurante;
    public error;

    constructor(private _restaurantesService: RestaurantesService,
        private _router: Router,
        private _routeParams: RouteParams) { }


    onSubmit() {
        console.log(this.restaurante);
        this._restaurantesService.updateRestaurante(this.restaurante).subscribe(
            res =>{
                this.restaurante=res;
                this._router.navigate(['Restaurante',{id:this.restaurante.id}]);
            },
            error=>{
                this.error = <any>error;
                this._router.navigate(['Home']);
                console.error("ERROR: " + error.status);
                console.info("INFORMACION DEL ERROR");
                console.info(error._body);
            }
        );
    }

    ngOnInit() {
        this.restaurante = new Restaurante(
            parseInt(this._routeParams.get("id")),
            null,null,null,null,null);
            this.getRestauranteById(this.restaurante.id);
    }

        getRestauranteById(id) {
        this._restaurantesService.getRestauranteById(id)
            .subscribe(
            res => {
                this.restaurante = res;
               
            },
            error => {
                this.error = <any>error;
                this._router.navigate(['Home']);
                console.error("ERROR: " + error.status);
                console.info("INFORMACION DEL ERROR");
                console.info(error._body);
            });

    }
}