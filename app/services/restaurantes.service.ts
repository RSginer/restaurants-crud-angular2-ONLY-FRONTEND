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
    private restaurantesUrl: string = "";

    public constructor(private _http: Http) { 
        super();
    }
    
    /*
    * Modelo de datos:
    *      [
    *       {
                "id":1,
                "nombre":"Burger King",
                "direccion":"Calle tal y cual",
                "descripcion":"tal y cual",
                "precio":"100000"}
            }
           ]
    */
    public getRestaurantes(): Observable<Restaurante[]> {
        let options = this.configurarCabeceras();
        return this._http.get("http://localhost:8084/restaurants-angular2-spring-hibernate/api/restaurantes", options).map(this.obtenerDatos)
            .catch(this.tratarErrores);
    }

  /*
     Modelo de datos:
           {
                "id":1,
                "nombre":"Burger King",
                "direccion":"Calle tal y cual",
                "descripcion":"tal y cual",
                "precio":"100000"}
            }
    */
    public getRestauranteById(id: String){
        let options = this.configurarCabeceras();
        return this._http.get("http://localhost:8084/restaurants-angular2-spring-hibernate/api/restaurantes/" + id, options).map(this.obtenerDatos)
        .catch(this.tratarErrores);
    }

    public addRestaurante(restaurante:Restaurante){
        let json = JSON.stringify(restaurante);
        let options = this.configurarCabeceras();
        return this._http.post(
            "http://localhost:8084/restaurants-angular2-spring-hibernate/api/restaurantes/",
             json,
             options).map(this.obtenerDatos).catch(this.tratarErrores);
    }

    public updateRestaurante(restaurante:Restaurante){
         let json = JSON.stringify(restaurante);
        let options = this.configurarCabeceras();
        return this._http.put(
            "http://localhost:8084/restaurants-angular2-spring-hibernate/api/update-restaurante/" + restaurante.id,
             json,
             options).map(this.obtenerDatos).catch(this.tratarErrores);
    }

    public removeRestaurante(id:number){
        return this._http.delete('http://localhost:8084/restaurants-angular2-spring-hibernate/api/delete-restaurante/' + id)
        .catch(this.tratarErrores);
    }

     private obtenerDatos(r: Response) { return r.json() } 

}
