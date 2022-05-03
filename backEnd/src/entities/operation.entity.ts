import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypeTransaction } from "./typeTransaction.entity";

@Entity()
export class Operation {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => TypeTransaction)
  @JoinColumn()
  type: TypeTransaction;

  @Column({ type: "decimal", nullable: true })
  amount: number;

  @Column()
  document: string;

  @Column()
  card: string;

  @Column()
  data: Date

  @Column({ type: 'time' })
  hour: string;

  @Column()
  storeOwner: string;

  @Column()
  storeName: string;

  totalAmount: number

}