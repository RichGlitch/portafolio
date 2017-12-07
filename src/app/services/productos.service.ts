import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[] = [];
  cargando:boolean = true;

  constructor(public http:Http) {
    this.cargarProductos();
   }
   public cargarProductos(){
    if(this.productos.length === 0){
      this.http.get("https://byllegurumiangular.firebaseio.com/productos_idx.json")
      .subscribe(data =>{
        this.productos = data.json();
        this.cargando = false;
      }) 
    }
   }
}
