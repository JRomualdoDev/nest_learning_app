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
  create(@Body() tarefa: CreateTarefasDto) {
    this.tarefasService.create(tarefa);
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
