import { Component } from '@angular/core';
import { ingresoServicio } from '../ingreso/ingreso.service';
import { egresoServicio } from '../egreso/egreso.service';
import { ingreso } from '../ingreso/ingreso.model';
import { egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  tipo="ing"
  descripcionInput=""
  valorInput=0

  constructor(private ingresoServicio:ingresoServicio,
              private egresoServicio:egresoServicio){}

 tipoOperacion(event:any) {
    this.tipo = event.target.value;
  }

  agregarValor(){
    if(this.tipo=="egr"){
      this.egresoServicio.egresos.push(new egreso(this.descripcionInput,this.valorInput))
    }
    else{
      this.ingresoServicio.ingresos.push(new ingreso(this.descripcionInput,this.valorInput))
    }

  }

}
