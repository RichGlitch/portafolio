import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable()
export class InformacionService {
  info:any = {};
  equipo:any[] = [];
  cargada:boolean = false;

  constructor(public http:Http) {
    this.carga_info();
    this.carga_nosotros();
   }

   public carga_info(){
     this.http.get("assets/data/info.pagina.json")
    .subscribe(data =>{
      this.cargada = true;
      this.info = data.json();
    })
   }

   public carga_nosotros(){
    this.http.get("https://byllegurumiangular.firebaseio.com/equipo.json")
    .subscribe(data =>{
      this.cargada = true;
      this.equipo = data.json();
    })
   }

}
