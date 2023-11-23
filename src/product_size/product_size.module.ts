import { Module } from '@nestjs/common';
import { ProductSizeService } from './product_size.service';
import { ProductSizeResolver } from './product_size.resolver';

@Module({
  providers: [ProductSizeResolver, ProductSizeService],
})
export class ProductSizeModule {}
