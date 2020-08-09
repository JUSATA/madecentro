import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CategoriasComponent,
    HomeComponent,
    ProveedoresComponent,
    InventarioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
