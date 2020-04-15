import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import {Profile} from './Profile'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstname: string;
    
    @Column()
    lastname: string;

    @OneToOne(type => Profile, {nullable: true, cascade: ["insert", "update"]})
    @JoinColumn()
    profile: Profile;
}
