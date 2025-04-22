import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { Tarefa as TarefaModel } from '@prisma/client';
import { ParseUUIDPipe } from '@nestjs/common';
import { CreateTarefasDto } from './dto/create-tarefas.dto';
import { UpdateTarefasDto } from './dto/update-tarefas.dto';

@Controller()
export class AppController {
  constructor(private readonly tarefaService: TarefasService) {}

  @Get(':id')
  async getTarefaById(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<TarefaModel | null> {
    return this.tarefaService.tarefa({ id });
  }

  @Get()
  async getTarefas(): Promise<TarefaModel[]> {
    return this.tarefaService.tarefas({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  @Post()
  async createTarefa(
    @Body() tarefaData: CreateTarefasDto
  ): Promise<TarefaModel> {
    return this.tarefaService.createTarefa(tarefaData);
  }

  @Put(':id')
  async updateTarefa(
    @Param('id') id: string,
    @Body() updateData: UpdateTarefasDto
  ): Promise<TarefaModel> {
    return this.tarefaService.updateTarefa({
      where: { id: id },
      data: updateData,
    });
  }

  @Delete('post/:id')
  async deleteTarefa(@Param('id') id: string): Promise<TarefaModel> {
    return this.tarefaService.deleteTarefa({ id: id });
  }
}
