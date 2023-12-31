import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductStyleInput {
  @Field(() => String, { description: '' })
  name: string;
}
