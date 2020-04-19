import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Profile } from './Profile'

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    url: string;

    @ManyToOne(type => Profile, profile => profile.photos, {nullable: true, cascade: ["insert", "update"]})
    profile: Profile;
}
