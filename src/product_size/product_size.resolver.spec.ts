import { Test, TestingModule } from '@nestjs/testing';
import { ProductSizeResolver } from './product_size.resolver';
import { ProductSizeService } from './product_size.service';

describe('ProductSizeResolver', () => {
  let resolver: ProductSizeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSizeResolver, ProductSizeService],
    }).compile();

    resolver = module.get<ProductSizeResolver>(ProductSizeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
