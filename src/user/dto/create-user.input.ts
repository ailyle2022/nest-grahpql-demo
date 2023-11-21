import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field((type) => String, { description: 'Example field (placeholder)' })
  name: string;
}
