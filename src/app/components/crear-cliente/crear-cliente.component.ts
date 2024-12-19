import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  cliente = {
    sharedKey: '',
    name: '',
    email: '',
    phone: ''
  };

  constructor(private clienteService: ClienteService) {}

  crearCliente(): void {
    this.clienteService.crearCliente(this.cliente).subscribe(() => {
      alert('Cliente creado con éxito');
      
      // Limpiar el formulario
      this.cliente = {
        sharedKey: '',
        name: '',
        email: '',
        phone: ''
      };
    }, (error) => {
      alert('Ocurrió un error al crear el cliente.');
    });
  }
}