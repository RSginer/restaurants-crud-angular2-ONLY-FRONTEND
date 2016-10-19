import {Http, Response, RequestOptions, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
@Injectable()
export class Service {

        public configurarCabeceras(): RequestOptions {
        let headers = new Headers({
            'Content-Type': 'application/json;charset=UTF-8'
        })
        let options = new RequestOptions({ headers: headers })
        return options
    }

    public tratarErrores(error: any) {
        if (error.status == 400) {
            alert("BAD_REQUEST 400 (Error en la peticion)");
            console.log(JSON.stringify(error));
        } else if (error.status == 500) {
            alert("INTERNAL_SERVER_ERROR 500 (Error en el servidor)");
            console.log(JSON.stringify(error));
        } else {
            alert("Error: "  + error);
            console.log(JSON.stringify(error));
        }
        return Observable.throw(error._body)
    }

}