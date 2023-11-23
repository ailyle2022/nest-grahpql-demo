import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductColorLangInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
