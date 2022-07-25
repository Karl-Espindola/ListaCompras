import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ServicioListaService } from '../servicio-lista.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  t:number=0;
  items: Item[]=[];

  constructor(private miServicio: ServicioListaService) { }

  ngOnInit(): void {
    
    this.t=this.miServicio.totalInicial();
    this.items=this.miServicio.getArticulo();
    // this.items=this.miServicio.articulosRestantes();

  }

  quitarArticulo(cosa:Item){
    console.log(cosa.id);
    this.t=this.miServicio.borrarArticulo(cosa);
    this.items=this.miServicio.getArticulo();
  }
  
  
  recal(c:Item){
    this.t=this.miServicio.getTotal();
  }

 
  
}
