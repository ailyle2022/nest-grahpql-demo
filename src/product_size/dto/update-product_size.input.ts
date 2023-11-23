import { CreateProductSizeInput } from './create-product_size.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductSizeInput extends PartialType(CreateProductSizeInput) {
  @Field(() => Int)
  id: number;
}
