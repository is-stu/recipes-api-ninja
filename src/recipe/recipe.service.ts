import { Inject, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { IngredientDto } from 'src/common/dto/ingredient.dto';
import { RecipeNinjaResponse } from 'src/common/interfaces/response-recipe-ninja.interface';

@Injectable()
export class RecipeService {
  constructor(
    @Inject(AxiosAdapter)
    private readonly axiosAdapter: AxiosAdapter,
  ) {}

  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  async findAllByIngredient({ ingredient }: IngredientDto) {
    const response = await this.axiosAdapter.get<RecipeNinjaResponse[]>(
      `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${ingredient}`,
      {
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': process.env.API_HOST,
        },
      },
    );

    return response;
  }
}
