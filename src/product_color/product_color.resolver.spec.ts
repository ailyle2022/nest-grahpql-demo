import { Test, TestingModule } from '@nestjs/testing';
import { ProductColorResolver } from './product_color.resolver';
import { ProductColorService } from './product_color.service';

describe('ProductColorResolver', () => {
  let resolver: ProductColorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductColorResolver, ProductColorService],
    }).compile();

    resolver = module.get<ProductColorResolver>(ProductColorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
