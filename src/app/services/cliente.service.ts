import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  buscarClientes(sharedKey: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?sharedKey=${sharedKey}`);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, cliente);
  }
}