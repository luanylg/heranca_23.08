"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = require("./veiculo");
var carro = /** @class */ (function (_super) {
    __extends(carro, _super);
    function carro(marca, modelo, Portas) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.Portas = Portas;
        return _this;
    }
    carro.prototype.apresentar = function () {
        console.log("Carro - Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Portas: ").concat(this.Portas));
    };
    return carro;
}(veiculo_1.veiculo));
var Carro1 = new carro("Toyota", "Corolla", 4);
Carro1.apresentar();
