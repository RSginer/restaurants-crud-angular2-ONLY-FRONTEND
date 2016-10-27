System.register(['angular2/core', "angular2/router", "../services/restaurantes.service"], function(exports_1, context_1) {
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
    var core_1, router_1, restaurantes_service_1;
    var RestaurantesListComponent;
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
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            RestaurantesListComponent = (function () {
                function RestaurantesListComponent(_servicioRestaurantes) {
                    this._servicioRestaurantes = _servicioRestaurantes;
                    this.titulo = "Listado de restaurantes";
                    this.loading = true;
                }
                RestaurantesListComponent.prototype.ngOnInit = function () {
                    this.getRestaurantes();
                };
                RestaurantesListComponent.prototype.onBorrarRestaurante = function (id) {
                    this.confirmado = id;
                };
                RestaurantesListComponent.prototype.confirmedBorrarRestaurante = function () {
                    var _this = this;
                    this.loading = true;
                    this._servicioRestaurantes.removeRestaurante(this.confirmado).subscribe(function (res) {
                        _this.getRestaurantes();
                    }, function (error) {
                        alert("Ocurrio un error al borrar el restaurante");
                    });
                    this.confirmado = null;
                };
                RestaurantesListComponent.prototype.getRestaurantes = function () {
                    var _this = this;
                    this._servicioRestaurantes.getRestaurantes()
                        .subscribe(function (res) {
                        _this.restaurantes = res;
                        if (res == undefined) {
                        }
                        _this.loading = false;
                    }, function (error) {
                        _this.error = error;
                        if (error.status == 200) {
                            _this.error.status = 401;
                        }
                        console.error("ERROR: " + error.status);
                        console.info("INFORMACION DEL ERROR");
                        console.info(error._body);
                    });
                };
                RestaurantesListComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurantes-list',
                        templateUrl: 'app/view/restaurantes-list.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [restaurantes_service_1.RestaurantesService]
                    }), 
                    __metadata('design:paramtypes', [restaurantes_service_1.RestaurantesService])
                ], RestaurantesListComponent);
                return RestaurantesListComponent;
            }());
            exports_1("RestaurantesListComponent", RestaurantesListComponent);
        }
    }
});
//# sourceMappingURL=restaurantes-list.component.js.map