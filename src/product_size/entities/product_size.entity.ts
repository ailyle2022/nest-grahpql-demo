import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductColor } from 'src/product_color/entities/product_color.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
export class ProductSize {
  @Field(() => Int, { description: 'Product Size Id' })
  id: number;

  @Field(() => String, { nullable: true, description: 'Label' })
  label: string;

  @Field(() => String, { nullable: true, description: 'EAN' })
  ean: string;

  @Field(() => String, { nullable: true, description: 'US Size' })
  us_size: string;

  @Field(() => String, { nullable: true, description: 'CN Size' })
  cn_size: string;

  @Field(() => String, { nullable: true, description: 'Product Id' })
  product_id: string;

  @Field(() => String, { nullable: true, description: 'Product Slug' })
  product_slug: string;

  @ManyToOne(() => ProductColor, (product_color) => product_color.product_sizes)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'product_id' })
  @Field(() => ProductColor, {
    nullable: true,
    description: 'Product Color',
  })
  product_color: ProductColor;

  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  updated_at: string;
}
