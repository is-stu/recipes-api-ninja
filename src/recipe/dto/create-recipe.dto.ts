import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty({
    description: 'The title of the recipe',
  })
  @IsString()
  @MinLength(3)
  title: string;

  @ApiProperty({
    description: 'The ingredients of the recipe',
  })
  @IsString()
  @MinLength(3)
  ingredients: string;

  @ApiProperty({
    description: 'The servings of the recipe',
  })
  @IsString()
  @MinLength(3)
  servings: string;

  @ApiProperty({
    description: 'The instructions of the recipe',
  })
  @IsString()
  @MinLength(3)
  instructions: string;
}
