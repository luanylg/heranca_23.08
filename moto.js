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
var moto = /** @class */ (function (_super) {
    __extends(moto, _super);
    function moto(marca, modelo, cilindradas) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.cilindradas = cilindradas;
        return _this;
    }
    moto.prototype.apresentar = function () {
        console.log("Moto - Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Cilindradas: ").concat(this.cilindradas));
    };
    return moto;
}(veiculo));
var Moto1 = new moto("Honda", "CBR 1000RR", 1000);
Moto1.apresentar();
