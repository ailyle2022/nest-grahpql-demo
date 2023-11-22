import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateProductStyleInput } from './dto/create-product_style.input';
import { UpdateProductStyleInput } from './dto/update-product_style.input';
import { ProductStyle } from './entities/product_style.entity';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Injectable()
export class ProductStyleService {

  productStyles: ProductStyle[] = []
  id: number = 1


  constructor(
    @Inject('PRODUCT_SERVICE_TCP') private productService: ClientProxy,
  ) { }

  create(createProductStyleInput: CreateProductStyleInput) {
    const productStyle = new ProductStyle()
    productStyle.id = this.id++
    productStyle.name = createProductStyleInput.name
    console.log(productStyle)
    this.productStyles.push(productStyle)
    return productStyle
  }

  async findAll() {
    let result = await this.productService
      .send({ cmd: 'findAll' }, {})
      .pipe(catchError(err => { throw new RpcException(new BadRequestException(err)) }))
      .toPromise()

      console.log(result)

    return result
  }

  async findOne(id: number) {
    /*
    const productStyle = this.productStyles.filter((item)=>{
      return item.id === id
    })
    return productStyle[0]
    */
    let result = await this.productService
      .send({ cmd: 'findAll' }, id)
      .pipe(catchError(err => { throw new RpcException(new BadRequestException(err)) }))
      .toPromise()

    const productStyle = result.filter((item)=>{
      return item.id === id
    })
    return productStyle[0]
  }
}
