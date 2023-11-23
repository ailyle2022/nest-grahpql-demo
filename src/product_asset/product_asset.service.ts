import { Injectable } from '@nestjs/common';
import { CreateProductAssetInput } from './dto/create-product_asset.input';
import { UpdateProductAssetInput } from './dto/update-product_asset.input';

@Injectable()
export class ProductAssetService {
  create(createProductAssetInput: CreateProductAssetInput) {
    return 'This action adds a new productAsset';
  }

  findAll() {
    return `This action returns all productAsset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productAsset`;
  }

  update(id: number, updateProductAssetInput: UpdateProductAssetInput) {
    return `This action updates a #${id} productAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} productAsset`;
  }
}
