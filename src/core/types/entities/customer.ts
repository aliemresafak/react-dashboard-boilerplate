import { BaseEntity } from "@/core/types/entities/entity";

export interface BaseCustomerEntity extends BaseEntity {
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
}
