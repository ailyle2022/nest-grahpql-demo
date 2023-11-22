import { Module } from '@nestjs/common';
import { ProductStyleService } from './product_style.service';
import { ProductStyleResolver } from './product_style.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync(
      [
        {
          name: 'PRODUCT_SERVICE_TCP',
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            transport: Transport.TCP,
            options: {
              host: process.env.PRODUCT_SERVICE_URL ? process.env.PRODUCT_SERVICE_URL : "127.0.0.1",
              port: process.env.PRODUCT_SERVICE_PORT ? parseInt(process.env.PRODUCT_SERVICE_PORT) : 3000,
            },
          }),
          inject: [ConfigService]
        }
      ]
    )
  ],
  providers: [ProductStyleResolver, ProductStyleService],
})
export class ProductStyleModule { }
