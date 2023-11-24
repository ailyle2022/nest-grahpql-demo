import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductAssetService {
  findAll() {
    return `This action returns all productAsset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productAsset`;
  }
}
