import { CreateTurmaDto, UpdateTurmaDto } from '../dto/turma.dto';
import { TurmaService } from '../service/turma.service';
export declare class TurmaController {
    private readonly turmaService;
    constructor(turmaService: TurmaService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(createTurmaDto: CreateTurmaDto): Promise<any>;
    update(id: number, updateTurmaDto: UpdateTurmaDto): Promise<any>;
    delete(id: number): Promise<void>;
}
