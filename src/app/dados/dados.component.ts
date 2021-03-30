import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css'],
})
export class DadosComponent implements OnInit {
  @Input() valor: number = 0;
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  elemento = '';
  elemento1 = '';
  elemento2 = '';
  condicion:boolean=false;

  aleatorio() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
    this.valor1 = Math.trunc(Math.random() * 6) + 1;
    this.valor2 = Math.trunc(Math.random() * 6) + 1;
    // console.log(this.valor, this.valor1, this.valor2);
    this.elemento = (document.getElementById('dado1') as HTMLImageElement).src =
      'assets/' + this.valor + '.svg';
    this.elemento1 = (document.getElementById(
      'dado2'
    ) as HTMLImageElement).src = 'assets/' + this.valor1 + '.svg';
    this.elemento = (document.getElementById('dado3') as HTMLImageElement).src =
      'assets/' + this.valor2 + '.svg';
  }
  ultimos3Sueldos() {
    let x: number = this.valor,
      y = this.valor1,
      z = this.valor2;

    if (x == y) {
      if (y == z) {
        this.condicion=true;
        console.log('gano');
      }
    } else {
      this.condicion=false;
      console.log('perdio');
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
