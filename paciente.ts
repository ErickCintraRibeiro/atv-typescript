namespace hospital{
    export class Paciente extends Pessoa {
        private _codPaciente:number;
        private _hospital:Hospital;

        public setCodPaciente(codPaciente:number){
            this._codPaciente = codPaciente;
        }

        public getCodPaciente(){
            return this._codPaciente;
        }

        public getHospital(){
            return this._hospital;
        }

        public setHospital(hospital:Hospital){
            this._hospital = hospital;
        }        
    }
}