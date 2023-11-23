import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductColor } from 'src/product_color/entities/product_color.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
export class ProductAsset {
  @Field(() => Int, { description: 'Product Size Id' })
  id: number;

  @Field(() => String, { nullable: true, description: 'Product Id' })
  product_id: string;

  @Field(() => String, { nullable: true, description: 'Local URL' })
  local_url: string;

  @Field(() => Boolean, { nullable: true, description: 'Is Video?' })
  is_video: boolean;

  @Field(() => Boolean, { nullable: true, description: 'Enable?' })
  enable: boolean;

  @Field(() => Number, { nullable: true, description: 'Sort' })
  sort: number;

  @Field(() => Boolean, { nullable: true, description: 'Is global?' })
  is_global: boolean;

  @ManyToOne(() => ProductColor, product_color => product_color.product_sizes)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'product_id' })
  @Field((type) => ProductColor, { nullable: true, description: 'Product Color' })
  product_color: ProductColor;

  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  updated_at: string;
}
