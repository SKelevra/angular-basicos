import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //SE PUEDE BORRAR:  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  heroes:string[]=['spiderman','hulk','superman','ironman','cap.america'];

  heroeBorrado:string='';

  borrarHeroe():void{
    console.log('borrando...');
    const heroeBorrado=this.heroes.pop()||''; //EXTRAIGO ULTIMO HEROE DEL ARRAY Y LO DEVUELVO EN VBLE "hroeBorrado"

    this.heroeBorrado=heroeBorrado;

    console.log(heroeBorrado);
  }


}
