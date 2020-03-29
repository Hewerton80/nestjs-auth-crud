import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum UserRole {
    ALUNO = "ALUNO",
    PROFESSOR = "PROFESSOR",
    ADMINISTRADOR = "ADMINISTRADOR",
    CHEFE = "CHEFE",

}
@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ 
        type:"varchar",
        length: 30,
        unique: true
    })
    email: string;

    @Column({ 
        type:"varchar",
        length: 30,
    })
    name: string;

    @Column({ 
        type:"varchar",
        length: 250,
    })
    password: string;

    @Column({
        type:"float",
        width:5,
        precision:2
    })
    height: number;

    @Column({
        type:"float",
        width:5,
        precision:2
    })
    weigth: number;

    @Column({
        type:"enum",
        enum: UserRole,
        default: UserRole.ALUNO
    })
    role: UserRole;

    @Column({default:true})
    actived: boolean;
}