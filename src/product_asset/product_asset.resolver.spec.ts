import { Test, TestingModule } from '@nestjs/testing';
import { ProductAssetResolver } from './product_asset.resolver';
import { ProductAssetService } from './product_asset.service';

describe('ProductAssetResolver', () => {
  let resolver: ProductAssetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAssetResolver, ProductAssetService],
    }).compile();

    resolver = module.get<ProductAssetResolver>(ProductAssetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
