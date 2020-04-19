import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm'
import { Language } from './Language'
import { Photo } from './Photo'

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nickname: string;

    @Column()
    aboutme: string;

    @OneToMany(type => Photo, photo => photo.profile, {nullable: true, cascade: ["insert", "update"], onUpdate: "CASCADE"})
    photos: Photo[];

    @ManyToMany(type => Language, {nullable: true, cascade: ["insert", "update"], onUpdate: "CASCADE"})
    languages: Language[];
}
