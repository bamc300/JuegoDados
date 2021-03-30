import { Component, Input } from '@angular/core';
import { DadosComponent } from './dados/dados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends DadosComponent {
  title = 'JuegoDados';
  @Input() Nombre: string = '';
  ganador = 'Felicidades tenemos un ganador';
  perdedor = 'Lo siento perdiste sigue intentando';
  

}
