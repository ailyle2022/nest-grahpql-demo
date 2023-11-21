import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductStyleService } from './product_style.service';
import { ProductStyle } from './entities/product_style.entity';
import { CreateProductStyleInput } from './dto/create-product_style.input';
import { UpdateProductStyleInput } from './dto/update-product_style.input';

@Resolver(() => ProductStyle)
export class ProductStyleResolver {
  constructor(private readonly productStyleService: ProductStyleService) { }

  @Mutation(() => ProductStyle)
  createProductStyle(@Args('createProductStyleInput') createProductStyleInput: CreateProductStyleInput) {
    return this.productStyleService.create(createProductStyleInput);
  }

  @Query(() => [ProductStyle], { name: 'productStyles' })
  findAll() {
    return this.productStyleService.findAll();
  }

  @Query(() => ProductStyle, { name: 'productStyle' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productStyleService.findOne(id);
  }
}
