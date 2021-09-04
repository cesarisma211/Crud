
export class EquipoModel{
    id              : string ="";
    nombre          : string ="";
    marca           : string ="";
    serie           : string ="";
    capacidad       : string ="";
    almacenamiento  : string ="";
    disponible      : boolean;
    constructor(){
        this.disponible = true;
    }
}