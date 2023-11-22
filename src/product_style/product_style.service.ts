import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateProductStyleInput } from './dto/create-product_style.input';
import { UpdateProductStyleInput } from './dto/update-product_style.input';
import { ProductStyle } from './entities/product_style.entity';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Injectable()
export class ProductStyleService {
  constructor(
    @Inject('PRODUCT_SERVICE_TCP') private productService: ClientProxy,
  ) { }

  async findAll() {
    let result = await this.productService
      .send({ cmd: 'findAll' }, {})
      .pipe(catchError(err => { throw new RpcException(new BadRequestException(err)) }))
      .toPromise()

    return result
  }

  async findOne(id: number) {
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
