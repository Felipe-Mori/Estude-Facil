import { Turma } from "src/turma/entity/turma.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    usuario:number

    @Column({length: 100})
    email:string

    @Column({length: 60})
    senha:string

    @OneToMany(() => Turma, turma => turma.turma) 
    turma: Turma[];
}
