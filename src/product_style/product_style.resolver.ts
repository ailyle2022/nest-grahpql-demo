import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductStyleService } from './product_style.service';
import { ProductStyle } from './entities/product_style.entity';
import { CreateProductStyleInput } from './dto/create-product_style.input';
import { UpdateProductStyleInput } from './dto/update-product_style.input';

@Resolver(() => ProductStyle)
export class ProductStyleResolver {
  constructor(private readonly productStyleService: ProductStyleService) { }

  @Query(() => [ProductStyle], { name: 'productStyles' })
  findAll(
    @Args('keywords', { type: () => String }) keywords: string
  ) {
    return this.productStyleService.findAll(keywords);
  }

  @Query(() => ProductStyle, { name: 'productStyle' })
  findOneByStyleSku(
    @Args('style_sku', { type: () => String }) style_sku: string,
  ) {
    return this.productStyleService.findOneByStyleSku(style_sku);
  }
}
