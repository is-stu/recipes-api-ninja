import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { CommonModule } from 'src/common/common.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService],
  imports: [ConfigModule, CommonModule],
})
export class RecipeModule {}
