import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../model/Restaurante";

@Component({
    selector: "restaurante-detail",
    templateUrl: "app/view/restaurante-detail.html",
    providers: [RestaurantesService]
})
export class RestauranteDetailComponent implements OnInit {
    public parametro;
    public error;
    public restaurante;

    constructor(
        private _restaurantesService: RestaurantesService,
        private _routeParams: RouteParams,
        private _router: Router
    ) { }


    ngOnInit() {
        this.parametro = this._routeParams.get("id");
        this.getRestauranteById(this.parametro);
        console.log(this.restaurante);

    }

    getRestauranteById(id: string) {
        this._restaurantesService.getRestauranteById(id)
            .subscribe(
            res => {
                this.restaurante = res;
                if (this.restaurante == undefined) {
                    this._router.navigate(['Home']);
                }
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