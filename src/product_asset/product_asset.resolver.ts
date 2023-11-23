import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductAssetService } from './product_asset.service';
import { ProductAsset } from './entities/product_asset.entity';
import { CreateProductAssetInput } from './dto/create-product_asset.input';
import { UpdateProductAssetInput } from './dto/update-product_asset.input';

@Resolver(() => ProductAsset)
export class ProductAssetResolver {
  constructor(private readonly productAssetService: ProductAssetService) {}

  @Mutation(() => ProductAsset)
  createProductAsset(@Args('createProductAssetInput') createProductAssetInput: CreateProductAssetInput) {
    return this.productAssetService.create(createProductAssetInput);
  }

  @Query(() => [ProductAsset], { name: 'productAsset' })
  findAll() {
    return this.productAssetService.findAll();
  }

  @Query(() => ProductAsset, { name: 'productAsset' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productAssetService.findOne(id);
  }

  @Mutation(() => ProductAsset)
  updateProductAsset(@Args('updateProductAssetInput') updateProductAssetInput: UpdateProductAssetInput) {
    return this.productAssetService.update(updateProductAssetInput.id, updateProductAssetInput);
  }

  @Mutation(() => ProductAsset)
  removeProductAsset(@Args('id', { type: () => Int }) id: number) {
    return this.productAssetService.remove(id);
  }
}
