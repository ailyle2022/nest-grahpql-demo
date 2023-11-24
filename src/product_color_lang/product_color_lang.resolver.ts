import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductColorLangService } from './product_color_lang.service';
import { ProductColorLang } from './entities/product_color_lang.entity';

@Resolver(() => ProductColorLang)
export class ProductColorLangResolver {
  constructor(
    private readonly productColorLangService: ProductColorLangService,
  ) {}

  @Mutation(() => ProductColorLang)
  @Query(() => [ProductColorLang], { name: 'productColorLang' })
  findAll() {
    return this.productColorLangService.findAll();
  }

  @Query(() => ProductColorLang, { name: 'productColorLang' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productColorLangService.findOne(id);
  }
}
