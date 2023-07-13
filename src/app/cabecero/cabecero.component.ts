import { Component, Input} from '@angular/core';
import { trigger,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
  animations:[
    trigger('cuenta',[
      transition(':increment',[
        style({transform:'scale(1.2)',color:'black'}),
        animate('300ms', style({ transform: 'scale(1)', color: 'black' }))
      ]),
      transition(':decrement', [
        style({ transform: 'scale(0.8)', color: 'red' }),
        animate('300ms', style({ transform: 'scale(1)', color: 'black' }))
      ])
    ])
  ]
})
export class CabeceroComponent{
  @Input() presupuestoTotal=0;
  @Input() ingresoTotal=0;
  @Input() egresoTotal=0;
  @Input() porcentajeTotal=0;
  
}
