import { BaseEntity } from "./entities/entity";

export interface BaseBrandEntity extends BaseEntity {
  name: string;
}

export interface BaseModelEntity extends BaseEntity {
  name: string;
  brand: BaseBrandEntity;
}

export interface BaseSparePartEntity extends BaseEntity {
  name: string;
  brand: BaseBrandEntity;
  model: BaseModelEntity;
  price: number;
  priceWithCurrency: string;
  amount: number;
  leftAmount: number;
  tempAmount: number;
}
