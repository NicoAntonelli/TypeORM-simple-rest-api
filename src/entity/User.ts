import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm'
import { Profile } from './Profile'

@Entity()
@Unique(["username", "email"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    
    @Column()
    username: string;
    
    @Column()
    password: string;

    @OneToOne(type => Profile, {nullable: true, cascade: ["insert", "update"], onUpdate: "CASCADE"})
    @JoinColumn()
    profile: Profile;
}
