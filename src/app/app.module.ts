import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { TotalComponent } from './total/total.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ServicioListaService } from './servicio-lista.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ServicioListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
