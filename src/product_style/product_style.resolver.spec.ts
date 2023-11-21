import { Test, TestingModule } from '@nestjs/testing';
import { ProductStyleResolver } from './product_style.resolver';
import { ProductStyleService } from './product_style.service';

describe('ProductStyleResolver', () => {
  let resolver: ProductStyleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductStyleResolver, ProductStyleService],
    }).compile();

    resolver = module.get<ProductStyleResolver>(ProductStyleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
