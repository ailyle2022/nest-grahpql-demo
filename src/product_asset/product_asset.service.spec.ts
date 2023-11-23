import { Test, TestingModule } from '@nestjs/testing';
import { ProductAssetService } from './product_asset.service';

describe('ProductAssetService', () => {
  let service: ProductAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAssetService],
    }).compile();

    service = module.get<ProductAssetService>(ProductAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
