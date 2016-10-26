import {Component, OnInit} from "angular2/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "add-restaurante",
    templateUrl: "app/view/add-restaurante.html",
    providers: [RestaurantesService]
})
export class AddRestaurantesComponent implements OnInit {
    public titulo = "Crear un nuevo restaurante";
    public restaurante:Restaurante;
    public error;
    public rutaImagen:string ="/assets/images/imagen-default.jpg";
    public loadingImagen:boolean=false;
    public imagenesParaSubir: Array<File>;
    private baseURL: string = "http://localhost:8084/api";

constructor(private _restaurantesService: RestaurantesService,
            private _router: Router,
            private _routeParams:RouteParams){}
    
   subirImagen(fileInput:any){
       this.loadingImagen=true;
       this.imagenesParaSubir = <Array<File>>fileInput.target.files;
       this._restaurantesService.subirImagen(this.imagenesParaSubir[0]).then(
           result =>{
               this.restaurante.imagen = result.toString();
               this.rutaImagen = result.toString();
               this.loadingImagen=false;
               console.log(result);
           },
           error =>{
               this.error =<any> error;
               console.log(error);
           }
       );
   }

    onSubmit(){
        this._restaurantesService.addRestaurante(this.restaurante)
        .subscribe(
            res => {
                this.restaurante=res;
                this._router.navigate(['Home']);
            },
            error => {
                alert("Error al añadir restaurante " + error.status);
                this.error = <any>error;
                console.error("ERROR: " + error.status);
                console.info("INFORMACION DEL ERROR");
                console.info(error._body);
            }
        );
    }

    ngOnInit() {
        this.restaurante=new Restaurante(null,null,null,null,null,null);
    }
}