import { IsString, Length, IsBoolean, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTarefaDto {
    @IsString()
    @Length(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' })
    nome: string;

    @IsInt()
    tarefa:number;

    @IsString()
    descricao:string;

    @IsBoolean()
    entrega:boolean;
    
    @IsInt()
    data_de_entrega:number;
}

export class UpdateTarefaDto extends PartialType(CreateTarefaDto) { }