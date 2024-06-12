import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/components/model/cep.model';
import { CepService } from 'src/app/components/model/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

cepList: Cep[]
displayedColumns = ['logradouro','bairro','cep','localidade','uf']

  constructor(private cepService: CepService){
  }
  
  ngOnInit(): void {
    this.buscarCep();
  }

  buscarCep():void {
    this.cepService.read().subscribe(cep => {
      this.cepList = cep
      console.log(this.cepList)
    })
  }
}
