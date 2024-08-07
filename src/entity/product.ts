import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Category } from './category';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  pro_id: number;

  @Column()
  pro_stock: string;

  @Column()
  pro_price: string;

  //@ManyToMany(() => Invoice)
  //invoice: Invoice[];

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'cat_id', referencedColumnName: 'category' })
  category: Category;
}
