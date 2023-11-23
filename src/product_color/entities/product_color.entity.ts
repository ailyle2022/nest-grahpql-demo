import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductAsset } from 'src/product_asset/entities/product_asset.entity';
import { ProductColorLang } from 'src/product_color_lang/entities/product_color_lang.entity';
import { ProductSize } from 'src/product_size/entities/product_size.entity';
import { ProductStyle } from 'src/product_style/entities/product_style.entity';
import { JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@ObjectType()
export class ProductColor {
  @Field(() => Int, { description: 'Product Color Id' })
  id: number;

  @Field(() => String, { nullable: true, description: 'Product Id' })
  product_id: string;

  @Field(() => String, { nullable: true, description: 'Product Id' })
  product_slug: string;

  @Field(() => String, { nullable: true, description: 'Product Id' })
  style_slug: string;

  @Field(() => String, { nullable: true, description: 'Product Id' })
  style_sku: string;

  @Field(() => String, { nullable: true, description: 'Color Name' })
  color_name: string;

  @Field(() => String, { nullable: true, description: 'Gender' })
  gender: string;

  @Field(() => String, { nullable: true, description: 'Product Name' })
  product_name: string;

  @Field(() => Int, { nullable: true, description: 'Product Color Price' })
  price: number;

  @Field(() => Int, { nullable: true, description: 'PDP Sort' })
  pdp_sort: number;

  @Field(() => Int, { nullable: true, description: 'Sort' })
  sort: number;

  @Field(() => Int, { nullable: true, description: 'Purchase limit' })
  purchase_limit: number;

  @Field(() => String, { nullable: true, description: 'Photoshoot Model Ids' })
  photoshoot_model_ids: string;

  @Field(() => String, { nullable: true, description: 'Size Chart Id' })
  size_chart_id: string;

  @Field(() => Int, { nullable: true, description: 'Preview' })
  preview: number;

  @Field(() => Int, { nullable: true, description: 'Publish' })
  publish: number;

  @Field(() => Int, { nullable: true, description: 'Enable At Website' })
  enable_at_website: number;

  @Field(() => Int, { nullable: true, description: 'Enable At Wechat Mp' })
  enable_at_wcmp: number;

  @Field(() => String, { nullable: true, description: 'Internal Tags' })
  internal_tags: string;

  @Field(() => String, { nullable: true, description: 'Search Keywords' })
  search_keywords: string;

  @OneToOne(() => ProductColorLang, lang => lang.product_color)
  @JoinColumn({ name: 'color_name', referencedColumnName: 'color_name' })
  @Field((type) => ProductColorLang, { nullable: true, description: 'Product Color Lang' })
  product_color_lang: ProductColorLang;

  @ManyToOne(() => ProductStyle, product_style => product_style.product_colors)
  @JoinColumn({ name: 'style_sku', referencedColumnName: 'style_sku' })
  @Field((type) => ProductStyle, { nullable: true, description: 'Product Style' })
  product_style: ProductStyle;

  @OneToMany(() => ProductSize, size => size.product_color)
  @Field((type) => [ProductSize], { nullable: true, description: 'Product Size' })
  @JoinColumn({ name: "product_id" })
  product_sizes?: ProductSize[];

  @OneToMany(() => ProductAsset, asset => asset.product_color)
  @Field((type) => [ProductAsset], { nullable: true, description: 'Product Size' })
  @JoinColumn({ name: "product_id" })
  product_assets?: ProductAsset[];

  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  updated_at: string;
}
