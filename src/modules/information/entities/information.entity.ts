import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Information extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({nullable: false, type:'varchar'})
  fullname: string;
  @Column({type: 'timestamp', nullable: true})
  birthdate: Date;
  @Column({nullable:true,type:'varchar' })
  address: string;
  @Column({nullable:true, type:'varchar'})
  phone: string;
  @Column({nullable:true, type:'varchar'})
  email: string;
  @Column({nullable:true, type:'varchar'})
  facebook: string;
  @Column({nullable:true, type:'varchar'})
  instagram: string;
  @Column({nullable:true, type:'varchar'})
  github: string;
  @Column({nullable:true, type:'json'})
  technologies: JSON;
  @Column({nullable:true, type:'json'})
  tools: JSON;
  @Column({nullable: true, type:'varchar'})
  cv: string;
  @Column({type: 'timestamptz', nullable: true})
  createdAt: Date;
  @Column({type: 'timestamptz', nullable: true})
  updatedAt: Date;
}