import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { HomeComponent } from './componentes/home/home.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

//modulo
import { ModuloEmailModule } from './moduloemail/moduloemail.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'categoria', component: CategoriasComponent },
  { path: 'proveedor', component: ProveedoresComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'contacto', component: ContactoComponent },

  // { path: '**', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
