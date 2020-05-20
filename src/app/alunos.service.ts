import { Injectable } from '@angular/core';
import { Alunos } from './alunos/alunos.module'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  aluno: Alunos ={
      nome: "Bruno Gabriel de Oliveira Gomes",
      idade: 22,
      RA: 11815381
    }
    ;

  constructor() { }

  async getAluno() {
    return await this.aluno;
  }
}