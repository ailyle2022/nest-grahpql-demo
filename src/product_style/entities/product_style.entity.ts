import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProductStyle {
  @Field(() => Int, { description: 'Product Style Id' })
  id: number;

  @Field(() => String, { description: 'Product Style Name' })
  name: string;

  @Field(() => String, { nullable: true, description: 'Product Style SKU'})
  style_sku: string;

  @Field(() => String, { nullable: true, description: 'Product Style Slug' })
  style_slug: string;

  @Field(() => String, { nullable: true, description: 'Product Style Display Name CN' })
  style_display_name_cn: string;

  @Field(() => String, { nullable: true, description: 'Product Style Display Name CN2' })
  style_display_name_cn2: string;

  @Field(() => String, { nullable: true, description: 'Product Style Short Description CN' })
  style_short_description_cn: string;

  @Field(() => String, { nullable: true, description: 'Product Style Description CN' })
  style_description_cn: string;

  @Field(() => String, { nullable: true, description: 'Product Style Meta Title CN' })
  style_meta_title_cn: string;

  @Field(() => String, { nullable: true, description: 'Product Style Meta Description CN' })
  style_meta_description_cn: string;

  @Field(() => String, { nullable: true, description: 'Product Style Product Type' })
  style_product_type: string;

  @Field(() => String, { nullable: true, description: 'Product Style Product SubType' })
  style_product_sub_type: string;

  @Field(() => Int, { nullable: true, description: 'Product Style Price' })
  price: number;
}
