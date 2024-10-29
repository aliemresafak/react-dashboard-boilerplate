import { BaseEntity } from "./entity";

export interface BaseCompanyEntity extends BaseEntity {
  name: string;
  address: string;
  taxNumber: string;
}
