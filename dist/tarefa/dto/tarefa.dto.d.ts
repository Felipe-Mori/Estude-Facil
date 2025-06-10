export declare class CreateTarefaDto {
    nome: string;
    tarefa: number;
    descricao: string;
    entrega: boolean;
    data_de_entrega: number;
}
declare const UpdateTarefaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTarefaDto>>;
export declare class UpdateTarefaDto extends UpdateTarefaDto_base {
}
export {};
