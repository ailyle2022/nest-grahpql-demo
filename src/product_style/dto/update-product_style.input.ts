import { CreateProductStyleInput } from './create-product_style.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductStyleInput extends PartialType(
  CreateProductStyleInput,
) {
  @Field(() => Int)
  id: number;
}
