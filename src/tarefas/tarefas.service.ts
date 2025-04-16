import { Injectable } from '@nestjs/common';
import { CreateTarefasDto } from './dto/create-tarefas.dto';
import { UpdateTarefasDto } from './dto/update-tarefas.dto';

@Injectable()
export class TarefasService {
  private readonly tarefas: CreateTarefasDto[] = [];

  getTarefas() {
    return this.tarefas;
  }

  getTarefa(id: number) {
    return this.tarefas.find((tarefa) => tarefa.id === id);
  }

  create(tarefa: CreateTarefasDto) {
    return this.tarefas.push(tarefa);
  }

  update(id: number, tarefa: UpdateTarefasDto) {
    const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    this.tarefas[index] = tarefa;
  }

  delete(id: number) {
    const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    this.tarefas.splice(index, 1);
  }
}
