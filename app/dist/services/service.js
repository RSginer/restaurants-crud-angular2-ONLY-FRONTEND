System.register(["angular2/http", "rxjs/Observable", "angular2/core"], function(exports_1, context_1) {
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
    var http_1, Observable_1, core_1;
    var Service;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Service = (function () {
                function Service() {
                }
                Service.prototype.configurarCabeceras = function () {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json;charset=UTF-8'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return options;
                };
                Service.prototype.tratarErrores = function (error) {
                    return Observable_1.Observable.throw(error);
                };
                Service = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Service);
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});
//# sourceMappingURL=service.js.map