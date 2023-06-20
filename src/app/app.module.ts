import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component'; 
import { ClienteService } from './clientes/cliente.service';
import { Routes, RouterModule } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes= [
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'directivas', component: DirectivasComponent},
  {path:'clientes', component: ClientesComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
