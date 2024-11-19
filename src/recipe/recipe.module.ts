import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { CommonModule } from 'src/common/common.module';
import { ConfigModule } from '@nestjs/config';
import { FavoriteRecipe } from './entities/recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService],
  imports: [
    ConfigModule,
    CommonModule,
    TypeOrmModule.forFeature([FavoriteRecipe]),
  ],
})
export class RecipeModule {}
