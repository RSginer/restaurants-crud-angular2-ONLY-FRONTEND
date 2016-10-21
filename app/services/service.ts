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
        return Observable.throw(error)
    }

}