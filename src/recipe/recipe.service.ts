import { Inject, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { IngredientDto } from 'src/common/dto/ingredient.dto';
import { RecipeNinjaResponse } from 'src/common/interfaces/response-recipe-ninja.interface';
import { API_URL } from 'src/common/constants/api.constants';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteRecipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeService {
  constructor(
    @Inject(AxiosAdapter)
    private readonly axiosAdapter: AxiosAdapter,
    @InjectRepository(FavoriteRecipe)
    private readonly favoriteRecipeRepository: Repository<FavoriteRecipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const newRecipe = this.favoriteRecipeRepository.create(createRecipeDto);
    return await this.favoriteRecipeRepository.save(newRecipe, { data: true });
  }

  async findAllByIngredient({ ingredient }: IngredientDto) {
    const response = await this.axiosAdapter.get<RecipeNinjaResponse[]>(
      `${API_URL}?query=${ingredient}`,
    );

    return response;
  }

  async findAll() {
    const response = await this.favoriteRecipeRepository.find();
    return response;
  }
}
