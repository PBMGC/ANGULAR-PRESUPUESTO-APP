import { Component,OnInit } from '@angular/core';
import { ingreso } from './ingreso.model';
import { ingresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:ingreso[]=[];

  constructor(private ingresosServicio:ingresoServicio){}

  ngOnInit(): void {
    this.ingresos=this.ingresosServicio.ingresos;
  }
  
  eliminarRegistro(ingreso:ingreso){
    //devolvera el indice el ingreso
    const indice:number=this.ingresos.indexOf(ingreso)
    
    //splice borrara solo un elemento
    //el primer valor indica apartir de donde
    //el segundo cuantos
    this.ingresos.splice(indice,1)
  }
}
