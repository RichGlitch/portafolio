import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent  {

  constructor(public _ps:ProductosService){

  }

}
