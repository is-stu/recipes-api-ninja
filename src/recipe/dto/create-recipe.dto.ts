import { IsString, MinLength } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @MinLength(3)
  title: string;
  @IsString()
  @MinLength(3)
  ingredients: string;
  @IsString()
  @MinLength(3)
  servings: string;
  @IsString()
  @MinLength(3)
  instructions: string;
}
