System.register(["angular2/core", "angular2/http", "./service", "rxjs/add/operator/map", 'rxjs/add/operator/catch', 'rxjs/add/observable/throw'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, service_1;
    var RestaurantesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            RestaurantesService = (function (_super) {
                __extends(RestaurantesService, _super);
                function RestaurantesService(_http) {
                    _super.call(this);
                    this._http = _http;
                    this.baseURL = "http://localhost:8084/api";
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
                RestaurantesService.prototype.getRestaurantes = function () {
                    var options = this.configurarCabeceras();
                    return this._http.get(this.baseURL + "/restaurantes", options).map(this.obtenerDatos)
                        .catch(this.tratarErrores);
                };
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
                RestaurantesService.prototype.getRestauranteById = function (id) {
                    var options = this.configurarCabeceras();
                    return this._http.get(this.baseURL + "/restaurantes/" + id, options).map(this.obtenerDatos)
                        .catch(this.tratarErrores);
                };
                RestaurantesService.prototype.addRestaurante = function (restaurante) {
                    var json = JSON.stringify(restaurante);
                    var options = this.configurarCabeceras();
                    return this._http.post(this.baseURL + "/restaurantes/", json, options).map(this.obtenerDatos).catch(this.tratarErrores);
                };
                RestaurantesService.prototype.updateRestaurante = function (restaurante) {
                    var json = JSON.stringify(restaurante);
                    var options = this.configurarCabeceras();
                    return this._http.put(this.baseURL + "/update-restaurante/" + restaurante.id, json, options).map(this.obtenerDatos).catch(this.tratarErrores);
                };
                RestaurantesService.prototype.removeRestaurante = function (id) {
                    return this._http.delete(this.baseURL + '/delete-restaurante/' + id)
                        .catch(this.tratarErrores);
                };
                RestaurantesService.prototype.subirImagen = function (url, params, file) {
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        formData.append("file", file, file.name);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.send(formData);
                    });
                };
                RestaurantesService.prototype.obtenerDatos = function (r) { return r.json(); };
                RestaurantesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestaurantesService);
                return RestaurantesService;
            }(service_1.Service));
            exports_1("RestaurantesService", RestaurantesService);
        }
    }
});
//# sourceMappingURL=restaurantes.service.js.map