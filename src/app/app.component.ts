import { Component } from '@angular/core';
import { ingreso } from './ingreso/ingreso.model';
import { egreso } from './egreso/egreso.model';
import { ingresoServicio } from './ingreso/ingreso.service';
import { egresoServicio } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto';

  ingresos:ingreso[]=[];
  //almacenara los valores
  egresos:egreso[]=[];

  constructor(private ingresosServicio:ingresoServicio,
              private egresoServicio:egresoServicio){
                this.ingresos=ingresosServicio.ingresos;
                this.egresos=egresoServicio.egresos;
              }
  
  getIngresoTotal(){
    let ingresoTotal:number=0;
  
    this.ingresos.forEach(ingreso=>{
      ingresoTotal+=ingreso.valor
    })
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
  
    this.egresos.forEach(egreso=>{
      egresoTotal+=egreso.valor
    })
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }

}
