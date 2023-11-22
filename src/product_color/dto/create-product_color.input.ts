import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductColorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
