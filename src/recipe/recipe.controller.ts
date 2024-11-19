import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { IngredientDto } from 'src/common/dto/ingredient.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @Get('search')
  findOne(@Query() ingredientDTO: IngredientDto) {
    console.log(ingredientDTO);
    return this.recipeService.findAllByIngredient(ingredientDTO);
  }
}
