import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cosa: Item= new Item; 
  @Input() indice:number=0;  
  @Output() articulo= new EventEmitter<Item>();
  @Output() check= new EventEmitter<Item>();
  constructor() { }


  ngOnInit(): void {
  }

  borrarArticulo(cosa: Item){
    
    this.articulo.emit(cosa);
  }

  cambiar(cosa:Item){
    this.cosa.completo = !this.cosa.completo;
    this.check.emit(cosa);
  }
  
  

}
