import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';
import { OneToMany } from 'typeorm';

@ObjectType()
export class User {
  @Field((type) => String, {})
  id: string;

  @Field((type) => String, {})
  name: string;

  @OneToMany(()=>Book, book=>book.user)
  @Field((type)=> String, { nullable: true })
  books: Book[]
}
