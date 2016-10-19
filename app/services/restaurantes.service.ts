import {Injectable} from "angular2/core";
import {Http, Response, RequestOptions, Headers} from "angular2/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/Restaurante";

@Injectable()
export class RestaurantesService {
    private restaurantesUrl: string = "http://localhost:8084/restaurants-angular2-spring-hibernate/api/restaurantes/";

    public constructor(private _http: Http) { }

    public getRestaurantes(): Observable<Restaurante[]> {
        let options = this.configurarCabeceras()
        return this._http.get(this.restaurantesUrl, options).map(this.obtenerDatos)
            .catch(this.tratarErrores);
    }

    private configurarCabeceras(): RequestOptions {
        let headers = new Headers({
            'Content-Type': 'application/json;charset=UTF-8'
        })
        let options = new RequestOptions({ headers: headers })
        return options
    }

    private obtenerDatos(r: Response) {
       if(r.status === 204){
            console.log("NO_CONTENT 204 (Respuesta vacía)");
        }else if(r.status===200){
             return r.json();
        }
    }

    private tratarErrores(error: any) {
        console.log(JSON.stringify(error));
        if (error.status == 400) {
            alert("BAD_REQUEST 400 (Error en la peticion)");
        } else if (error.status == 500) {
            alert("INTERNAL_SERVER_ERROR 500 (Error en el servidor)");
        } else {
            alert("Error: " + error.status + " - " + error);
        }
        return Observable.throw(error._body)
    }

}
