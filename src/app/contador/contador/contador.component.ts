import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
            <h1>{{titulo}}</h1>

            <!-- 41 -->
            <h3>la  base es: <strong>{{base}}</strong></h3>

            <button (click)="acumular2(base)">+ {{base}}</button> 

            <span> {{numero3}} </span> 

            <button (click)="acumular2(-base)">- {{base}}</button> 

    `
})

export class ContadorComponent{
    titulo: string = 'Contador APP';
    //tarea(video41):
    numero3:number=10;
    base:number=5;
  
    acumular2(valor:number){
      this.numero3 +=valor;
    }
  

}