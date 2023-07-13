import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent {
  @Input() presupuestoTotal=0;
  @Input() ingresoTotal=0;
  @Input() egresoTotal=0;
  @Input() porcentajeTotal=0;
}
