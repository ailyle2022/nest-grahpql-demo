import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductColorLangService } from './product_color_lang.service';
import { ProductColorLang } from './entities/product_color_lang.entity';
import { CreateProductColorLangInput } from './dto/create-product_color_lang.input';
import { UpdateProductColorLangInput } from './dto/update-product_color_lang.input';

@Resolver(() => ProductColorLang)
export class ProductColorLangResolver {
  constructor(private readonly productColorLangService: ProductColorLangService) {}

  @Mutation(() => ProductColorLang)
  createProductColorLang(@Args('createProductColorLangInput') createProductColorLangInput: CreateProductColorLangInput) {
    return this.productColorLangService.create(createProductColorLangInput);
  }

  @Query(() => [ProductColorLang], { name: 'productColorLang' })
  findAll() {
    return this.productColorLangService.findAll();
  }

  @Query(() => ProductColorLang, { name: 'productColorLang' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productColorLangService.findOne(id);
  }

  @Mutation(() => ProductColorLang)
  updateProductColorLang(@Args('updateProductColorLangInput') updateProductColorLangInput: UpdateProductColorLangInput) {
    return this.productColorLangService.update(updateProductColorLangInput.id, updateProductColorLangInput);
  }

  @Mutation(() => ProductColorLang)
  removeProductColorLang(@Args('id', { type: () => Int }) id: number) {
    return this.productColorLangService.remove(id);
  }
}
