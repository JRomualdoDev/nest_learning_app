import { Controller, Get, Post } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
  constructor(private tarefasService: TarefasService) {}

  @Get()
  getTarefas() {
    return this.tarefasService.getTarefas();
  }

  @Post('create')
  createTarefas() {
    return this.tarefasService.create({
      id: 1,
      title: 'Estudar NestJS',
      description: 'Estudar NestJS para criar uma API',
      status: 'pendente',
    });
  }
}
