import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
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
    Logger.log('Starting finding recipes by ingredient');
    try {
      const response = await this.axiosAdapter.get<RecipeNinjaResponse[]>(
        `${API_URL}?query=${ingredient}`,
      );

      return response;
    } catch (error) {
      Logger.log(`Error on findAllByIngredient ${error}`);
      throw new InternalServerErrorException(
        'We are experimenting some errors, please try again later',
      );
    }
  }

  async findAll() {
    const response = await this.favoriteRecipeRepository.find();
    return response;
  }

  async delete(id: string) {
    const response = await this.favoriteRecipeRepository.delete(id);

    if (response.affected > 0) {
      return {
        message: `The recipe with id '${id}' was deleted`,
      };
    } else {
      return {
        message: `The recipe with id '${id}' no longer exists`,
      };
    }
  }
}
