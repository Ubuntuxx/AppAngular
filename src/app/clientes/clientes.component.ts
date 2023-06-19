import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' },
    { id: 2, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' },
    { id: 3, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' },
    { id: 4, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' },
    { id: 5, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' },
    { id: 6, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' },
    { id: 7, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' },
    { id: 8, nombre: 'Luis', apellido: 'Amador', email: 'luis10amador@gmail.com', fecha: '2000-01-02' }
  ]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
