import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProductSizeService } from './product_size.service';
import { ProductSize } from './entities/product_size.entity';

@Resolver(() => ProductSize)
export class ProductSizeResolver {
  constructor(private readonly productSizeService: ProductSizeService) {}
  @Query(() => [ProductSize], { name: 'productSize' })
  findAll() {
    return this.productSizeService.findAll();
  }

  @Query(() => ProductSize, { name: 'productSize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productSizeService.findOne(id);
  }
}
