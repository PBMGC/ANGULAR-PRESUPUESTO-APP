import { egreso } from "./egreso.model";

export class egresoServicio{
    egresos:egreso[]=[
        new egreso("Compra de Gatos",900),
        new egreso("Alquiler de Casa",5000)
    ];
    
    eliminar(egreso:egreso){
        const indice:number=this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }

}