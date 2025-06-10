
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { CreateTarefaDto, UpdateTarefaDto } from '../dto/tarefa.dto';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../entity/tarefa.entity';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';

@ApiTags('tarefa')
@UseGuards(JwtAuthGuard)
@Controller('tarefa')
export class TarefaController {
    constructor(private readonly tarefaService: TarefaService) { }

    @Get()
    async findAll(): Promise<any[]> {
        return this.tarefaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return this.tarefaService.findOne(id);
    }

    @Post()
    async create(@Body() createTarefaDto: CreateTarefaDto): Promise<Tarefa> {
        return this.tarefaService.create(createTarefaDto);
    }
    

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateTarefaDto: UpdateTarefaDto,
    ): Promise<any> {
        return this.tarefaService.update(id, updateTarefaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.tarefaService.delete(id);
    }
}