import { ingreso } from "./ingreso.model";

export class ingresoServicio{
    //arreglo de ingresos
    ingresos:ingreso[]=[
        new ingreso("Salario",4000),
        new ingreso("Venta de Camotes",500)
    ];
}