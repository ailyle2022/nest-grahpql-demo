import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductColorLangService {
  findAll() {
    return `This action returns all productColorLang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productColorLang`;
  }
}
