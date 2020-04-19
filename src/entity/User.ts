import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Profile } from './Profile'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    // TO-DO: Set Password (Hashed) for User, and unique email. Move Names to profile.

    @Column()
    firstname: string;
    
    @Column()
    lastname: string;

    @OneToOne(type => Profile, {nullable: true, cascade: ["insert", "update"], onUpdate: "CASCADE"})
    @JoinColumn()
    profile: Profile;
}
