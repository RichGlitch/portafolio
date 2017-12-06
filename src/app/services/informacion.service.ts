import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable()
export class InformacionService {
  info:any = {};
  cargada:boolean = false;

  constructor(public http:Http) {
    this.http.get("assets/data/info.pagina.json")
    .subscribe(data =>{
      console.log(data.json());
      this.cargada = true;
      this.info = data.json();
    })
   }

}
