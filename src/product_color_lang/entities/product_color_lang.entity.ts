import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductColor } from 'src/product_color/entities/product_color.entity';
import { JoinColumn, OneToOne } from 'typeorm';

@ObjectType()
export class ProductColorLang {
  @Field(() => Int, { description: 'Product Color Lang Id' })
  id: number;

  @Field(() => String, { nullable: true, description: 'Color Name' })
  color_name: string;

  @Field(() => String, { nullable: true, description: 'Color Name CN' })
  color_name_cn: string;

  @Field(() => String, { nullable: true, description: 'Filter_attributes' })
  filter_attributes: string;

  @OneToOne(
    () => ProductColor,
    (product_color) => product_color.product_color_lang,
  )
  @JoinColumn({ name: 'color_name', referencedColumnName: 'color_name' })
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
