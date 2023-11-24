import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductStyleService } from './product_style.service';
import { ProductStyle } from './entities/product_style.entity';

@Resolver(() => ProductStyle)
export class ProductStyleResolver {
  constructor(private readonly productStyleService: ProductStyleService) {}

  @Query(() => [ProductStyle], { name: 'productStyles' })
  async findAll() {
    const result = await this.productStyleService.findAll({}, {}, 1, 0, []);
    return result;
  }

  @Query(() => ProductStyle, { name: 'productStyleBySku' })
  async findOneByStyleSku(
    @Args('style_sku', { type: () => String }) style_sku: string,
  ) {
    const result = await this.productStyleService.findAll(
      { style_sku: style_sku },
      {},
      1,
      0,
      [
        'product_colors',
        'product_colors.product_color_lang',
        'product_colors.product_assets',
        'product_colors.product_sizes',
      ],
    );
    return result[0];
  }

  @Query(() => ProductStyle, { name: 'productStyleByKeywords' })
  async findOneByStyleKeywords(
    @Args('keywords', { type: () => String }) keywords: string,
  ) {
    const result = await this.productStyleService.findAll(
      {},
      {
        name: keywords,
        /*
        style_display_name_cn: keywords,
        style_display_name_cn2: keywords,
        style_short_description_cn: keywords,
        style_description_cn: keywords,
        style_meta_title_cn: keywords,
        style_meta_description_cn: keywords,
        */
      },
      0,
      0,
      [],
    );
    return result;
  }
}
