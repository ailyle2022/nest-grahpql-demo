import { Module } from '@nestjs/common';
import { ProductColorService } from './product_color.service';
import { ProductColorResolver } from './product_color.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'PRODUCT_SERVICE_TCP',
        imports: [ConfigModule],
        useFactory: () => ({
          transport: Transport.TCP,
          options: {
            host: process.env.PRODUCT_SERVICE_URL
              ? process.env.PRODUCT_SERVICE_URL
              : '127.0.0.1',
            port: process.env.PRODUCT_SERVICE_PORT
              ? parseInt(process.env.PRODUCT_SERVICE_PORT)
              : 3000,
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [ProductColorResolver, ProductColorService],
})
export class ProductColorModule {}
