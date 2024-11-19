import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { IngredientDto } from 'src/common/dto/ingredient.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @ApiResponse({
    status: 201,
    description: 'The recipe was created successfully',
    type: CreateRecipeDto,
  })
  @ApiResponse({
    status: 400,
    description: 'The recipe was not created',
  })
  @ApiResponse({
    status: 500,
    description: 'An error occurred while creating the recipe',
  })
  @ApiBody({
    type: CreateRecipeDto,
  })
  @Post('favorites')
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @ApiQuery({
    type: String,
    name: 'ingredient',
  })
  @Get('search')
  findOne(@Query() ingredientDTO: IngredientDto) {
    console.log(ingredientDTO);
    return this.recipeService.findAllByIngredient(ingredientDTO);
  }

  @Get('favorites')
  findAll() {
    return this.recipeService.findAll();
  }

  @Delete('favorites/:id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.recipeService.delete(id);
  }
}
