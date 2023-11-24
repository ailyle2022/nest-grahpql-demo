import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductColor } from 'src/product_color/entities/product_color.entity';
import { JoinColumn, OneToMany } from 'typeorm';

@ObjectType()
export class ProductStyle {
  @Field(() => Int, { description: 'Product Style Id' })
  id: number;

  @Field(() => String, { description: 'Product Style Name' })
  name: string;

  @Field(() => String, { nullable: true, description: 'Product Style SKU' })
  style_sku: string;

  @Field(() => String, { nullable: true, description: 'Product Style Slug' })
  style_slug: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Display Name CN',
  })
  style_display_name_cn: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Display Name CN2',
  })
  style_display_name_cn2: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Short Description CN',
  })
  style_short_description_cn: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Description CN',
  })
  style_description_cn: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Meta Title CN',
  })
  style_meta_title_cn: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Meta Description CN',
  })
  style_meta_description_cn: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Product Type',
  })
  style_product_type: string;

  @Field(() => String, {
    nullable: true,
    description: 'Product Style Product SubType',
  })
  style_product_sub_type: string;

  @Field(() => Int, { nullable: true, description: 'Product Style Price' })
  price: number;

  @OneToMany(() => ProductColor, (color) => color.product_style)
  @Field(() => [ProductColor], {
    nullable: true,
    description: 'Product Color',
  })
  @JoinColumn({ name: 'style_sku' })
  product_colors?: ProductColor[];

  /*
  @OneToMany(() => DoctorSchedule, doctorSchedule => doctorSchedule.user)   
  @Field(type => [DoctorSchedule])   
  @JoinColumn({ name: "doctorId" })   
  doctorSchedules?: DoctorSchedule[];
  */

  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  updated_at: string;
}
