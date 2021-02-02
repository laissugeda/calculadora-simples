import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  resultado

  constructor() { 
    this.resultado = ""
  }
  ngOnInit(): void {

  }

  calcular () {
    this.resultado = this.resultado.length ? eval (this.resultado) : "0"
  }
  addnumero (num: any) {
    this.resultado += num
  }
  // addoperacao (operacao: any){
  //   if (this.resultado === "")
  //   return 
  //   this.resultado += operacao
  // }
  limpar () {
    this.resultado = ""
  }
}
