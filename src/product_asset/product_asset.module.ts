import { Module } from '@nestjs/common';
import { ProductAssetService } from './product_asset.service';
import { ProductAssetResolver } from './product_asset.resolver';

@Module({
  providers: [ProductAssetResolver, ProductAssetService],
})
export class ProductAssetModule {}
