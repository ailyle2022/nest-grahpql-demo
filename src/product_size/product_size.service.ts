import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductSizeService {
  findAll() {
    return `This action returns all productSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSize`;
  }
}
