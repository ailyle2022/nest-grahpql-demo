import { CreateProductColorInput } from './create-product_color.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductColorInput extends PartialType(CreateProductColorInput) {
  @Field(() => Int)
  id: number;
}
