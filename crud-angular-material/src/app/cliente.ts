import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
    providedIn: 'root'
})


export class ClienteService {

    // CONSTANTE PARA ARMAZENAR O NOME DO REPOSITÓRIO DE CLIENTES NO LOCAL STORAGE
    static REPO_CLIENTES = "_CLIENTES"

    constructor(){}

    // SALVAR O CLIENTE NO LOCAL STORAGE, PEGANDO O REPOSITÓRIO DE CLIENTES, ADICIONANDO O NOVO CLIENTE E ATUALIZANDO O REPOSITÓRIO COM O NOVO ARRAY DE CLIENTES
    salvar(cliente: Cliente){
        const storage = this.getStorage();
        storage.push(cliente);
    
        // ATUALIZA O REPOSITÓRIO DE CLIENTES NO LOCAL STORAGE COM O NOVO ARRAY DE CLIENTES
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
    }

    // TRANSFORMA OS CLIENTES EM ARRAY E FAZ O GET PARA LISTAR TODOS OS ARMAZENADOS NO LOCAL STORAGE
    getStorage() : Cliente[] {
        const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES)
        
        // SE O REPOSITÓRIO DE CLIENTES EXISTIR, TRANSFORMA O JSON EM ARRAY DE CLIENTES E RETORNA O ARRAY DE CLIENTES
        if(repositorioClientes){
            const clientes: Cliente[] = JSON.parse(repositorioClientes);

            return clientes;
        }

        const clientes: Cliente[] = [];

        // SE O REPOSITÓRIO DE CLIENTES NÃO EXISTIR, CRIA UM ARRAY VAZIO DE CLIENTES, ARMAZENA NO LOCAL STORAGE E RETORNA O ARRAY VAZIO
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
        return clientes;
    }
}
