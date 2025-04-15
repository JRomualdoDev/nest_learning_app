import { Injectable } from '@nestjs/common';
import { CreateTarefasDto } from './dto/create-tarefas.dto';

@Injectable()
export class TarefasService {
  private readonly tarefas: CreateTarefasDto[] = [];

  getTarefas() {
    return this.tarefas;
  }

  create(tarefa: CreateTarefasDto) {
    return this.tarefas.push(tarefa);
  }
}
