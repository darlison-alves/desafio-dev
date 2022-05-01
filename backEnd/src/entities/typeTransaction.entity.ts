import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Operation } from "./operation.entity";

@Entity("type_transaction")
export class TypeTransaction {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  nature: string;
}