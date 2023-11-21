import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { ManyToOne } from 'typeorm';

@ObjectType()
export class Book {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field((type) => String, {})
  name: string;

  @ManyToOne(()=>User, user=>user.books)
  @Field((type) => User, { nullable: true })
  user: User;
}
