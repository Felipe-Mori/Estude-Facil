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
import { CreateTurmaDto, UpdateTurmaDto } from '../dto/turma.dto'; 
import { TurmaService } from '../service/turma.service'; 
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';

@ApiTags('turma')
@UseGuards(JwtAuthGuard)
@Controller('turma')
export class TurmaController {
    constructor(private readonly turmaService: TurmaService) { }

    @Get()
    async findAll(): Promise<any[]> {
        return this.turmaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return this.turmaService.findOne(id);
    }

    @Post()
    async create(@Body() createTurmaDto: CreateTurmaDto): Promise<any> {
        return this.turmaService.create(createTurmaDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateTurmaDto: UpdateTurmaDto,
    ): Promise<any> {
        return this.turmaService.update(id, updateTurmaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.turmaService.delete(id);
    }
}
