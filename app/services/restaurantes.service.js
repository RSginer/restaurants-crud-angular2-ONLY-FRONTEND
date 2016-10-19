System.register(["angular2/core", "angular2/http", "rxjs/add/operator/map", 'rxjs/add/operator/catch', 'rxjs/add/observable/throw', "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var RestaurantesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            RestaurantesService = (function () {
                function RestaurantesService(_http) {
                    this._http = _http;
                    this.restaurantesUrl = "http://localhost:8084/restaurants-angular2-spring-hibernate/api/restaurantes/";
                }
                RestaurantesService.prototype.getRestaurantes = function () {
                    var options = this.configurarCabeceras();
                    return this._http.get(this.restaurantesUrl, options).map(this.obtenerDatos)
                        .catch(this.tratarErrores);
                };
                RestaurantesService.prototype.configurarCabeceras = function () {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json;charset=UTF-8'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return options;
                };
                RestaurantesService.prototype.obtenerDatos = function (r) {
                    if (r.status === 204) {
                        console.log("NO_CONTENT 204 (Respuesta vacía)");
                    }
                    else if (r.status === 200) {
                        return r.json();
                    }
                };
                RestaurantesService.prototype.tratarErrores = function (error) {
                    console.log(JSON.stringify(error));
                    if (error.status == 400) {
                        alert("BAD_REQUEST 400 (Error en la peticion)");
                    }
                    else if (error.status == 500) {
                        alert("INTERNAL_SERVER_ERROR 500 (Error en el servidor)");
                    }
                    else {
                        alert("Error: " + error.status + " - " + error);
                    }
                    return Observable_1.Observable.throw(error._body);
                };
                RestaurantesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestaurantesService);
                return RestaurantesService;
            }());
            exports_1("RestaurantesService", RestaurantesService);
        }
    }
});
//# sourceMappingURL=restaurantes.service.js.map