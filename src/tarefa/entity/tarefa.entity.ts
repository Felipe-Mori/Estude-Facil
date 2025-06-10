import { Turma } from "src/turma/entity/turma.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tarefa")
export class Tarefa {
    @PrimaryGeneratedColumn()
    tarefa:number

    @Column({length: 200})
    descricao:string

    @Column()
    entrega:boolean
    
    @Column()
    data_de_entrega:number

    @OneToMany(() => Turma, turma => turma.turma) 
    turma: Turma[];
}

