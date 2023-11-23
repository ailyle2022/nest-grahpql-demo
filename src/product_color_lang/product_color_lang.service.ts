import { Injectable } from '@nestjs/common';
import { CreateProductColorLangInput } from './dto/create-product_color_lang.input';
import { UpdateProductColorLangInput } from './dto/update-product_color_lang.input';

@Injectable()
export class ProductColorLangService {
  create(createProductColorLangInput: CreateProductColorLangInput) {
    return 'This action adds a new productColorLang';
  }

  findAll() {
    return `This action returns all productColorLang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productColorLang`;
  }

  update(id: number, updateProductColorLangInput: UpdateProductColorLangInput) {
    return `This action updates a #${id} productColorLang`;
  }

  remove(id: number) {
    return `This action removes a #${id} productColorLang`;
  }
}
