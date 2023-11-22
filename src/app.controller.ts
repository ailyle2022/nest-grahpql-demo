import { BadRequestException, Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern, RpcException } from '@nestjs/microservices';
import { Observable, catchError } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('PRODUCT_SERVICE_TCP') private productService: ClientProxy,
  ) { }

  @Get()
  getHello(@Param() body: any):Observable<MyInterface> {
    const result =  this.productService
      .send({ cmd: 'findAll' }, body)
      .pipe(catchError(err => { throw new RpcException(new BadRequestException(err)) }))
    //return this.appService.getHello();
    return result
  }
}

interface MyInterface {
  id: number,
  name: string
}
