import { CreateProductColorLangInput } from './create-product_color_lang.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductColorLangInput extends PartialType(
  CreateProductColorLangInput,
) {
  @Field(() => Int)
  id: number;
}
