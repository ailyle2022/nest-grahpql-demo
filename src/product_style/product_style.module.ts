import { Module } from '@nestjs/common';
import { ProductStyleService } from './product_style.service';
import { ProductStyleResolver } from './product_style.resolver';

@Module({
  providers: [ProductStyleResolver, ProductStyleService],
})
export class ProductStyleModule {}
