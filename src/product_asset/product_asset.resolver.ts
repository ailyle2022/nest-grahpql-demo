import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProductAssetService } from './product_asset.service';
import { ProductAsset } from './entities/product_asset.entity';

@Resolver(() => ProductAsset)
export class ProductAssetResolver {
  constructor(private readonly productAssetService: ProductAssetService) {}

  @Query(() => [ProductAsset], { name: 'productAsset' })
  findAll() {
    return this.productAssetService.findAll();
  }

  @Query(() => ProductAsset, { name: 'productAsset' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productAssetService.findOne(id);
  }
}
