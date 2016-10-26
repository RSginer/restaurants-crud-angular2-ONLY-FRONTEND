import {Component, OnInit} from "angular2/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "edit-restaurante",
    templateUrl: "app/view/add-restaurante.html",
    providers: [RestaurantesService]
})
export class EditRestauranteComponent implements OnInit {
    public titulo = "Editar restaurante";
    public restaurante: Restaurante;
    public error;
    public loadingImagen: boolean = false;
    public imagenesParaSubir: Array<File>;
    private baseURL: string = "http://localhost:8084/api";
    public rutaImagen: string;

    constructor(private _restaurantesService: RestaurantesService,
        private _router: Router,
        private _routeParams: RouteParams) { }
    subirImagen(fileInput: any) {
        this.imagenesParaSubir = <Array<File>>fileInput.target.files;
        this.factoryFileRequest(this.baseURL + "/upload-file", [], this.imagenesParaSubir).then(
            result => {
                this.restaurante.imagen = result.toString();
                this.rutaImagen = result.toString();
                console.log(result);
            },
            error => {
                this.error = <any>error;
                console.log(error);
            }
        );
    }


    factoryFileRequest(url: string, params: Array<string>, files: Array<File>) {
        console.log(files);
        return new Promise((resolve, reject) => {
            let formData: any = new FormData();
            let xhr = new XMLHttpRequest();
            formData.append("file", files[0], files[0].name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    onSubmit() {
        console.log(this.restaurante);
        this._restaurantesService.updateRestaurante(this.restaurante).subscribe(
            res => {
                this.restaurante = res;
                this._router.navigate(['Restaurante', { id: res.id }]);
            },
            error => {
                this.error = <any>error;
                this._router.navigate(['Home']);
                console.error("ERROR: " + error.status);
                console.info("INFORMACION DEL ERROR");
                console.info(error._body);
            }
        );
    }

    ngOnInit() {
        this.restaurante = new Restaurante(
            parseInt(this._routeParams.get("id")),
            null, null, null, null, null);
        this.getRestauranteById(this.restaurante.id);

    }

    getRestauranteById(id) {
        this._restaurantesService.getRestauranteById(id)
            .subscribe(
            res => {
                this.restaurante = res;
                if (this.restaurante.imagen != null) {
                    this.rutaImagen = this.restaurante.imagen;
                } else {
                    this.rutaImagen = "/assets/images/imagen-default.jpg";
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