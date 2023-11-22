import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './book/book.module';
import { ProductStyleModule } from './product_style/product_style.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';


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
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(), 'src/schema.gql')
    }),
    UserModule,
    BookModule,
    ProductStyleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
