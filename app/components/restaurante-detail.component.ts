import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../model/Restaurante";

@Component({
    selector: "restaurante-detail",
    templateUrl: "app/view/restaurante-detail.html",
    providers: [RestaurantesService]
})
export class RestauranteDetailComponent implements OnInit{
    public parametro;
    public error;
    public restaurante;

    constructor(
        private _restaurantesService: RestaurantesService,
        private _routeParams: RouteParams
    ){}


    ngOnInit(){
        this.parametro = this._routeParams.get("id");
        this.getRestauranteById(this.parametro);
    }

    getRestauranteById(id:string){
        this._restaurantesService.getRestauranteById(id)
                                    .subscribe(
                                        res =>{
                                            this.restaurante =  res;
                                        },
                                        error => {
                                            this.error = <any> error;
                                        });

    }
}