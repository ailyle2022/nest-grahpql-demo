import { Injectable } from '@nestjs/common';
import { CreateProductStyleInput } from './dto/create-product_style.input';
import { UpdateProductStyleInput } from './dto/update-product_style.input';
import { ProductStyle } from './entities/product_style.entity';

@Injectable()
export class ProductStyleService {

  productStyles: ProductStyle[] = []
  id: number = 1

  create(createProductStyleInput: CreateProductStyleInput) {
    const productStyle = new ProductStyle()
    productStyle.id = this.id++
    productStyle.name = createProductStyleInput.name
    console.log(productStyle)
    this.productStyles.push(productStyle)
    return productStyle
  }

  findAll() {
    return this.productStyles
  }

  findOne(id: number) {
    const productStyle = this.productStyles.filter((item)=>{
      return item.id === id
    })
    return productStyle[0]
  }
}
