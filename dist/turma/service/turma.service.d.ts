import { Repository } from 'typeorm';
import { Turma } from '../entity/turma.entity';
import { CreateTurmaDto, UpdateTurmaDto } from '../dto/turma.dto';
export declare class TurmaService {
    private readonly turmaRepository;
    constructor(turmaRepository: Repository<Turma>);
    findAll(): Promise<Turma[]>;
    findOne(id: number): Promise<Turma>;
    create(createTurmaDto: CreateTurmaDto): Promise<Turma>;
    update(id: number, updateTurmaDto: UpdateTurmaDto): Promise<void>;
    delete(id: number): Promise<void>;
}
