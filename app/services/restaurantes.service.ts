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
    private baseURL: string = "http://localhost:8084/api";

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
        return this._http.get(this.baseURL + "/restaurantes", options).map(this.obtenerDatos)
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
        return this._http.get(this.baseURL + "/restaurantes/" + id, options).map(this.obtenerDatos)
        .catch(this.tratarErrores);
    }

    public addRestaurante(restaurante:Restaurante){
        let json = JSON.stringify(restaurante);
        let options = this.configurarCabeceras();
        return this._http.post(
            this.baseURL + "/restaurantes/",
             json,
             options).map(this.obtenerDatos).catch(this.tratarErrores);
    }

    public updateRestaurante(restaurante:Restaurante){
         let json = JSON.stringify(restaurante);
        let options = this.configurarCabeceras();
        return this._http.put(
            this.baseURL + "/update-restaurante/" + restaurante.id,
             json,
             options).map(this.obtenerDatos).catch(this.tratarErrores);
    }

    public removeRestaurante(id:number){
        return this._http.delete(this.baseURL + '/delete-restaurante/' + id)
        .catch(this.tratarErrores);
    }

    public subirImagen(file:File){
        return new Promise((resolve, reject) => {
            let formData: any = new FormData();
            let xhr = new XMLHttpRequest();
            formData.append("file", file, file.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", this.baseURL + "/upload-file", true);
            xhr.send(formData);
        });
    }

     private obtenerDatos(r: Response) { return r.json() } 

}
