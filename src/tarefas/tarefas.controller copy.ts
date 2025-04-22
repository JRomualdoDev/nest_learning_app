import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefasDto } from './dto/create-tarefas.dto';
import { UpdateTarefasDto } from './dto/update-tarefas.dto';

@Controller('tarefas')
export class TarefasController {
  constructor(private tarefasService: TarefasService) {}

  @Get()
  getTarefas() {
    return this.tarefasService.getTarefas();
  }

  @Post()
  async create(@Body() tarefa: CreateTarefasDto) {
    console.log(tarefa);
    try {
      await prisma.tarefa.create({
        data: {
          titulo: tarefa.titulo,
          descricao: tarefa.descricao,
          status: tarefa.status,
        },
      });
      return 'Tarefa criada com sucesso';
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  getTarefa(@Param('id') id: string) {
    return this.tarefasService.getTarefa(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefasDto) {
    return this.tarefasService.update(+id, updateTarefaDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tarefasService.delete(+id);
  }
}
