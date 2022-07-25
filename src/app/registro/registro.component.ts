import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/Item';
import { ServicioListaService } from '../servicio-lista.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private miServicio: ServicioListaService, private volver:Router) { }

  id:number=0;
  nombre:string="";
  precio:number=0;
  cantidad:number=0;

  enviar(){
    
    const producto=new Item();
    producto.id=this.id;
    producto.titulo=this.nombre;
    producto.precio=this.precio;
    producto.cantidad=this.cantidad;
    producto.completo=false;

    this.miServicio.actualizar(producto);
    this.volver.navigate(['home']);
  }

  ngOnInit(): void {
  }

}
