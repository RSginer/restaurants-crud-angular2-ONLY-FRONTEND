System.register(["angular2/core", "angular2/router", "../services/restaurantes.service"], function(exports_1, context_1) {
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
    var RestauranteDetailComponent;
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
            RestauranteDetailComponent = (function () {
                function RestauranteDetailComponent(_restaurantesService, _routeParams, _router) {
                    this._restaurantesService = _restaurantesService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                RestauranteDetailComponent.prototype.ngOnInit = function () {
                    this.parametro = this._routeParams.get("id");
                    this.getRestauranteById(this.parametro);
                    console.log(this.restaurante);
                };
                RestauranteDetailComponent.prototype.getRestauranteById = function (id) {
                    var _this = this;
                    this._restaurantesService.getRestauranteById(id)
                        .subscribe(function (res) {
                        _this.restaurante = res;
                        if (_this.restaurante == undefined) {
                            _this._router.navigate(['Home']);
                        }
                    }, function (error) {
                        _this.error = error;
                        _this._router.navigate(['Home']);
                        console.error("ERROR: " + error.status);
                        console.info("INFORMACION DEL ERROR");
                        console.info(error._body);
                    });
                };
                RestauranteDetailComponent = __decorate([
                    core_1.Component({
                        selector: "restaurante-detail",
                        templateUrl: "app/view/restaurante-detail.html",
                        providers: [restaurantes_service_1.RestaurantesService]
                    }), 
                    __metadata('design:paramtypes', [restaurantes_service_1.RestaurantesService, router_1.RouteParams, router_1.Router])
                ], RestauranteDetailComponent);
                return RestauranteDetailComponent;
            }());
            exports_1("RestauranteDetailComponent", RestauranteDetailComponent);
        }
    }
});
//# sourceMappingURL=restaurante-detail.component.js.map