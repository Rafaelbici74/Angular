import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente'


@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {

  // INICIALIZA O OBJETO CLIENTE PARA QUE SEJA POSSÍVEL ACESSAR SUAS PROPRIEDADES NO HTML
  cliente: Cliente = Cliente.newCliente();

  // INJETANDO O SERVIÇO DE CLIENTE PARA QUE SEJA POSSÍVEL ACESSAR OS MÉTODOS DELE
  constructor(private service: ClienteService){

  }

  // MÉTODO PARA SALVAR O CLIENTE, CHAMANDO O MÉTODO SALVAR DO SERVIÇO DE CLIENTE E PASSANDO O OBJETO CLIENTE COMO PARÂMETRO
  salvar(){
    this.service.salvar(this.cliente);  
  }
}
