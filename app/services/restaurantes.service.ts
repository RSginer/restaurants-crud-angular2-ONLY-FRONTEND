import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/Restaurante";

@Injectable()
export class RestaurantesService{

// api url: localhost/restaurant-crud-in-angular2/server/api.php/
    constructor(private _http:Http){}

    getRestaurantes(){
        return this._http.get("//localhost/restaurant-crud-in-angular2/server/api.php/restaurantes")
        .map(res => res.json());
    }
}
