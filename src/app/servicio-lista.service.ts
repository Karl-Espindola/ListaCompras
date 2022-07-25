import { Injectable } from '@angular/core';
import { Item } from './models/Item';

@Injectable({
  providedIn: 'root'
})
export class ServicioListaService {

  items:Item[]=[
    {
      id:0,
      titulo:'manzana',
      precio:1500,
      cantidad:2,
      completo:false,
    },
    {
      id:1,
      titulo:'banana',
      precio:500,
      cantidad:4,
      completo:true,
    },
    {
      id:2,
      titulo:'dona',
      precio:500,
      cantidad:4,
      completo:true,
    }
  ];
  t:number=0;
  constructor() { }

  getArticulo(){
    
    return this.items;
  }

  actualizar(art:Item){
    
    this.items.push(art); 
    
  }
  
  getTotal(){
    
    var lista=this.items.filter(x => x.completo !== true);
    
    if(lista.length > 0){
      console.log(lista);
      var arrayTotales= lista.map(x => x.precio * x.cantidad);
      this.t=arrayTotales.reduce((anterior, actual) => anterior + actual ); 
    }
    else{
      this.t=0;
    }
    return this.t;
  } 

  totalInicial(){
    
    return this.getTotal();
  }


  borrarArticulo(cosa:Item){
    
    this.items=this.items.filter(x => x.id !== cosa.id);
    console.log(this.items);
    return this.getTotal();
    
  }
}
