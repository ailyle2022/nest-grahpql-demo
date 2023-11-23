import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductSizeService } from './product_size.service';
import { ProductSize } from './entities/product_size.entity';
import { CreateProductSizeInput } from './dto/create-product_size.input';
import { UpdateProductSizeInput } from './dto/update-product_size.input';

@Resolver(() => ProductSize)
export class ProductSizeResolver {
  constructor(private readonly productSizeService: ProductSizeService) {}

  @Mutation(() => ProductSize)
  createProductSize(@Args('createProductSizeInput') createProductSizeInput: CreateProductSizeInput) {
    return this.productSizeService.create(createProductSizeInput);
  }

  @Query(() => [ProductSize], { name: 'productSize' })
  findAll() {
    return this.productSizeService.findAll();
  }

  @Query(() => ProductSize, { name: 'productSize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productSizeService.findOne(id);
  }

  @Mutation(() => ProductSize)
  updateProductSize(@Args('updateProductSizeInput') updateProductSizeInput: UpdateProductSizeInput) {
    return this.productSizeService.update(updateProductSizeInput.id, updateProductSizeInput);
  }

  @Mutation(() => ProductSize)
  removeProductSize(@Args('id', { type: () => Int }) id: number) {
    return this.productSizeService.remove(id);
  }
}
