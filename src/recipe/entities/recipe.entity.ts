import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FavoriteRecipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 255 })
  title: string;
  @Column({ type: 'varchar', length: 255 })
  ingredients: string;
  @Column({ type: 'varchar', length: 255 })
  servings: string;
  @Column({ type: 'text' })
  instructions: string;
}
