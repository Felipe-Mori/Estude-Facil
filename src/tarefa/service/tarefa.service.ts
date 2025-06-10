import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from '../entity/tarefa.entity';
import { CreateTarefaDto, UpdateTarefaDto } from '../dto/tarefa.dto';

@Injectable()
export class TarefaService {
    constructor(
        @InjectRepository(Tarefa)
        private tarefaRepository: Repository<Tarefa>,
    ) { }

    async findAll(): Promise<Tarefa[]> {
        return await this.tarefaRepository.find();
    }

    async findOne(id: number): Promise<Tarefa> {
        const tarefa = await this.tarefaRepository.findOne({
            where: { tarefa: id },
            relations: ['Tarefa'],
        });

        if (!tarefa) {
            throw new HttpException(`Tarefa não encontrada.`, HttpStatus.NOT_FOUND);
        }
        return tarefa;
    }

    async create(createTarefaDto: CreateTarefaDto): Promise<Tarefa> {
        try {
            return await this.tarefaRepository.save(this.tarefaRepository.create(createTarefaDto));
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Tarefa já cadastrada.', HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException(
                    'Erro ao criar o registro. Tente novamente mais tarde.',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        }
    }

    async update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<void> {
        const result = await this.tarefaRepository.update(id, updateTarefaDto);
        if (result.affected === 0) {
            throw new HttpException(`Usuário não encontrado.`, HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: number): Promise<void> {
        const result = await this.tarefaRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException(`Tarefa não encontrada.`, HttpStatus.NOT_FOUND);
        }
    }
}
