import { Test, TestingModule } from '@nestjs/testing';
import { ProductColorLangResolver } from './product_color_lang.resolver';
import { ProductColorLangService } from './product_color_lang.service';

describe('ProductColorLangResolver', () => {
  let resolver: ProductColorLangResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductColorLangResolver, ProductColorLangService],
    }).compile();

    resolver = module.get<ProductColorLangResolver>(ProductColorLangResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
