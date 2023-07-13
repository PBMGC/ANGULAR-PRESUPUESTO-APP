import { Component, OnInit,Input } from '@angular/core';
import { egreso } from './egreso.model';
import { egresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos:egreso[]=[]

  @Input() ingresoTotal:number=0;
  
  constructor(private egresosServicio:egresoServicio){}

  ngOnInit(): void {
    this.egresos=this.egresosServicio.egresos
  }

  eliminarEgresos(egreso:egreso){
    this.egresosServicio.eliminar(egreso)
  }

  calcularPorcentaje(egreso:egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
