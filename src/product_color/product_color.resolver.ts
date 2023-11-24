import { Resolver, Query } from '@nestjs/graphql';
import { ProductColorService } from './product_color.service';
import { ProductColor } from './entities/product_color.entity';

@Resolver(() => ProductColor)
export class ProductColorResolver {
  constructor(private readonly productColorService: ProductColorService) {}

  @Query(() => [ProductColor], { name: 'productColors' })
  findAll() {
    return this.productColorService.findAll();
  }

  /*
  @Query(() => ProductColor, { name: 'productColor' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('product_id', { type: () => String }) product_id: string
  ) {
    return this.productColorService.findOne(id);
  }
  */
}
