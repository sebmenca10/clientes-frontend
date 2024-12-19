import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes: any[] = [];
  searchKey: string = '';

  // Propiedad para el cliente que se va a crear
  cliente = {
    name: '',
    phone: '',
    email: '',
    startDate: '',
    endDate: ''
  };

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.getClientes().subscribe((data: any) => {
      this.clientes = data;
    });
  }

  crearCliente(): void {
    this.clienteService.crearCliente(this.cliente).subscribe(() => {
      alert('Cliente creado con éxito');
      // Limpia el formulario del modal
      this.cliente = {
        name: '',
        phone: '',
        email: '',
        startDate: '',
        endDate: ''
      };
      // Refresca la lista de clientes
      this.obtenerClientes();
    }, error => {
      alert('Ocurrió un error al crear el cliente.');
    });
  }
}
