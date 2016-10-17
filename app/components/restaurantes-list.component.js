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
                    this.titulo = "Lista de restaurantes";
                }
                RestaurantesListComponent.prototype.ngOnInit = function () {
                    console.log("restaurantes-list component cargando");
                    this.getRestaurantes();
                };
                RestaurantesListComponent.prototype.getRestaurantes = function () {
                    var _this = this;
                    this._servicioRestaurantes.getRestaurantes()
                        .subscribe(function (result) {
                        _this.restaurantes = result.data;
                        _this.status = result.status;
                        if (_this.status != "success") {
                            alert("Error en el servidor");
                        }
                    }, function (error) {
                        _this.mensajeDeError = error;
                        if (_this.mensajeDeError != null) {
                            console.log(_this.mensajeDeError);
                            alert("Error en la peticion");
                        }
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