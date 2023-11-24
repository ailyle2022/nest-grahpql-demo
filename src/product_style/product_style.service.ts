import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Injectable()
export class ProductStyleService {
  constructor(
    @Inject('PRODUCT_SERVICE_TCP') private productService: ClientProxy,
  ) {}

  async findAll(where, search_key_words, take, skip, relations) {
    const payload = {
      where,
      search_key_words,
      take,
      skip,
      relations,
    };

    const result = await this.productService
      .send({ cmd: 'findAllStyle' }, payload)
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
