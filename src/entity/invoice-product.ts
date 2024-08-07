import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Invoice } from './invoice';
import { Product } from './product';

@Entity()
export class InvoiceProduct {
  @PrimaryGeneratedColumn()
  invpro_id: number;

  @Column()
  invpro_amount: string;

  @Column()
  invpro_price: string;

  @ManyToOne(() => Invoice)
  @JoinColumn({ name: 'inv_id', referencedColumnName: 'invoice' })
  invoice: Invoice;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'pro_id', referencedColumnName: 'product' })
  product: Product;
}
