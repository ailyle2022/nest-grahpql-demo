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

  async findAll(where, take, skip, relations) {
    const payload = {
      where,
      take,
      skip,
      relations
    }

    let result = await this.productService
      .send({ cmd: 'findAllStyle' }, payload)
      .pipe(catchError(err => { throw new RpcException(new BadRequestException(err)) }))
      .toPromise()

    const { code, message, data } = result

    if (code == 200) {
      return data
    } else {
      throw new RpcException(new BadRequestException(message))
    }
  }

}
