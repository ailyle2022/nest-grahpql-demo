import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './book/book.module';
import { ProductStyleModule } from './product_style/product_style.module';


@Module({
  imports: [
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
