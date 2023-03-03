import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent,  //UNICO COMPONENTE Q TENEMOS
        
    ],
    exports:[
        ContadorComponent   //PARA PODERLO USAR FUERA DE ESTE MODULO
    ],
    imports:[
        
    ],
})

export class ContadorModule {

}