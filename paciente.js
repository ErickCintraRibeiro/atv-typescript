var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital;
(function (hospital_1) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.setCodPaciente = function (codPaciente) {
            this._codPaciente = codPaciente;
        };
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype.getHospital = function () {
            return this._hospital;
        };
        Paciente.prototype.setHospital = function (hospital) {
            this._hospital = hospital;
        };
        return Paciente;
    }(hospital_1.Pessoa));
    hospital_1.Paciente = Paciente;
})(hospital || (hospital = {}));
