import { IsString, MinLength } from 'class-validator';

export class IngredientDto {
  @IsString()
  @MinLength(3)
  ingredient: string;
}
