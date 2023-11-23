import { Test, TestingModule } from '@nestjs/testing';
import { ProductColorLangService } from './product_color_lang.service';

describe('ProductColorLangService', () => {
  let service: ProductColorLangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductColorLangService],
    }).compile();

    service = module.get<ProductColorLangService>(ProductColorLangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
