import { Module } from '@nestjs/common';
import { ProductColorLangService } from './product_color_lang.service';
import { ProductColorLangResolver } from './product_color_lang.resolver';

@Module({
  providers: [ProductColorLangResolver, ProductColorLangService],
})
export class ProductColorLangModule {}
