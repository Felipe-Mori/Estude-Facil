import { Turma } from "src/turma/entity/turma.entity";
export declare class Tarefa {
    tarefa: number;
    descricao: string;
    entrega: boolean;
    data_de_entrega: number;
    turma: Turma[];
}
