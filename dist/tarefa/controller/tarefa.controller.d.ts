import { CreateTarefaDto, UpdateTarefaDto } from '../dto/tarefa.dto';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../entity/tarefa.entity';
export declare class TarefaController {
    private readonly tarefaService;
    constructor(tarefaService: TarefaService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(createTarefaDto: CreateTarefaDto): Promise<Tarefa>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<any>;
    delete(id: number): Promise<void>;
}
