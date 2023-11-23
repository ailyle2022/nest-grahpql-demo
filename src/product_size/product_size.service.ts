import { Injectable } from '@nestjs/common';
import { CreateProductSizeInput } from './dto/create-product_size.input';
import { UpdateProductSizeInput } from './dto/update-product_size.input';

@Injectable()
export class ProductSizeService {
  create(createProductSizeInput: CreateProductSizeInput) {
    return 'This action adds a new productSize';
  }

  findAll() {
    return `This action returns all productSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSize`;
  }

  update(id: number, updateProductSizeInput: UpdateProductSizeInput) {
    return `This action updates a #${id} productSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSize`;
  }
}
