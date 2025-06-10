import { IsInt, IsString, Length, Matches } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateTurmaDto {
    @IsString()
    @Length(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' })
    nome: string;

    @IsString()
    sala: string;

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message:
            'a senha deve ter pelo menos 8 caracteres, incluindo uma pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    })
    senha: string;

    @IsInt()
    userUsuario:number;

    @IsInt()
    ano:number;
}

export class UpdateTurmaDto extends PartialType(CreateTurmaDto) { }