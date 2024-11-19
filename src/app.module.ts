import { Module } from '@nestjs/common';
import { RecipeModule } from './recipe/recipe.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ConfigModule.forRoot(), RecipeModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
