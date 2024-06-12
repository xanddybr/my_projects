import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from './cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  baseUrl = "https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/";

  constructor(private http : HttpClient) {
  }

  read(): Observable<Cep[]>{
    return this.http.get<Cep[]>(this.baseUrl)
  }

}

