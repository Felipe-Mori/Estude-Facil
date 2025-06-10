import { User } from "src/user/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("turma")
export class Turma {
    @PrimaryGeneratedColumn()
    turma:number

    @Column({length: 100})
    nome:string

    @Column()
    ano:number

    @Column()
    professor:number

    @ManyToOne(() => User, user => user.turma) 
    user: User; 

    @Column()
    userUsuario:number;

    @Column()
    sala:string;

    @Column()
    senha:string;
}
