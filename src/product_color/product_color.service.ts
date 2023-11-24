import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Injectable()
export class ProductColorService {
  constructor(
    @Inject('PRODUCT_SERVICE_TCP') private productService: ClientProxy,
  ) {}

  async findAll() {
    const result = await this.productService
      .send({ cmd: 'findAllColor' }, {})
      .pipe(
        catchError((err) => {
          throw new RpcException(new BadRequestException(err));
        }),
      )
      .toPromise();

    const { code, message, data } = result;

    if (code == 200) {
      return data;
    } else {
      throw new RpcException(new BadRequestException(message));
    }
  }

  async findOneByStyleSku(style_sku) {
    const result = await this.productService
      .send({ cmd: 'findOneStyleBySku' }, { style_sku })
      .pipe(
        catchError((err) => {
          throw new RpcException(new BadRequestException(err));
        }),
      )
      .toPromise();

    const { code, message, data } = result;

    if (code == 200) {
      return data;
    } else {
      throw new RpcException(new BadRequestException(message));
    }
  }
}
