export declare class CreateTurmaDto {
    nome: string;
    sala: string;
    senha: string;
    userUsuario: number;
    ano: number;
}
declare const UpdateTurmaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTurmaDto>>;
export declare class UpdateTurmaDto extends UpdateTurmaDto_base {
}
export {};
