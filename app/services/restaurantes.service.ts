import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/Restaurante";

@Injectable()

export class RestaurantesService{
    private http:Http;

    constructor(private _http:Http){
        this.http = _http;
    }

    getRestaurantes(){

    }
}
