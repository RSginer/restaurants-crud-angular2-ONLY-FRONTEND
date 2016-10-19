import {Injectable} from "angular2/core";
import {Http, Response, RequestOptions, Headers} from "angular2/http";
import {Service} from "./service";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/Restaurante";

@Injectable()
export class RestaurantesService extends Service{
    private restaurantesUrl: string = "http://localhost:8084/restaurants-angular2-spring-hibernate/api/restaurantes/";

    public constructor(private _http: Http) { 
        super();
    }

    public getRestaurantes(): Observable<Restaurante[]> {
        let options = this.configurarCabeceras();
        return this._http.get(this.restaurantesUrl, options).map(this.obtenerDatos)
            .catch(this.tratarErrores);
    }

     private obtenerDatos(r: Response) { return r.json() } 

}
