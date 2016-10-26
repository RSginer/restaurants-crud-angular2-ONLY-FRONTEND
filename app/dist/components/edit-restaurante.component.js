System.register(["angular2/core", "angular2/router", "../services/restaurantes.service", "../model/restaurante"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, restaurantes_service_1, restaurante_1;
    var EditRestauranteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurantes_service_1_1) {
                restaurantes_service_1 = restaurantes_service_1_1;
            },
            function (restaurante_1_1) {
                restaurante_1 = restaurante_1_1;
            }],
        execute: function() {
            EditRestauranteComponent = (function () {
                function EditRestauranteComponent(_restaurantesService, _router, _routeParams) {
                    this._restaurantesService = _restaurantesService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.titulo = "Editar restaurante " + this._routeParams.get("id");
                    this.loadingImagen = false;
                }
                EditRestauranteComponent.prototype.subirImagen = function (fileInput) {
                    var _this = this;
                    this.loadingImagen = true;
                    this.imagenesParaSubir = fileInput.target.files;
                    this._restaurantesService.subirImagen(this.imagenesParaSubir[0]).then(function (result) {
                        _this.loadingImagen = false;
                        _this.restaurante.imagen = result.toString();
                        _this.rutaImagen = result.toString();
                        console.log(result);
                    }, function (error) {
                        _this.error = error;
                        alert("Error al subir la imagen " + error.status);
                        _this.error = error;
                        console.error("ERROR: " + error.status);
                        console.info("INFORMACION DEL ERROR");
                        console.info(error._body);
                    });
                };
                EditRestauranteComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.restaurante);
                    this._restaurantesService.updateRestaurante(this.restaurante).subscribe(function (res) {
                        _this.restaurante = res;
                        _this._router.navigate(['Restaurante', { id: res.id }]);
                    }, function (error) {
                        _this.error = error;
                        _this._router.navigate(['Home']);
                        console.error("ERROR: " + error.status);
                        console.info("INFORMACION DEL ERROR");
                        console.info(error._body);
                    });
                };
                EditRestauranteComponent.prototype.ngOnInit = function () {
                    this.restaurante = new restaurante_1.Restaurante(parseInt(this._routeParams.get("id")), null, null, null, null, null);
                    this.getRestauranteById(this.restaurante.id);
                };
                EditRestauranteComponent.prototype.getRestauranteById = function (id) {
                    var _this = this;
                    this._restaurantesService.getRestauranteById(id)
                        .subscribe(function (res) {
                        _this.restaurante = res;
                        if (_this.restaurante.imagen != null) {
                            _this.rutaImagen = _this.restaurante.imagen;
                        }
                        else {
                            _this.rutaImagen = "/assets/images/imagen-default.jpg";
                        }
                    }, function (error) {
                        _this.error = error;
                        _this._router.navigate(['Home']);
                        console.error("ERROR: " + error.status);
                        console.info("INFORMACION DEL ERROR");
                        console.info(error._body);
                    });
                };
                EditRestauranteComponent = __decorate([
                    core_1.Component({
                        selector: "edit-restaurante",
                        templateUrl: "app/view/add-restaurante.html",
                        providers: [restaurantes_service_1.RestaurantesService]
                    }), 
                    __metadata('design:paramtypes', [restaurantes_service_1.RestaurantesService, router_1.Router, router_1.RouteParams])
                ], EditRestauranteComponent);
                return EditRestauranteComponent;
            }());
            exports_1("EditRestauranteComponent", EditRestauranteComponent);
        }
    }
});
//# sourceMappingURL=edit-restaurante.component.js.map