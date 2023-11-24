import { CreateProductAssetInput } from './create-product_asset.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductAssetInput extends PartialType(
  CreateProductAssetInput,
) {
  @Field(() => Int)
  id: number;
}
