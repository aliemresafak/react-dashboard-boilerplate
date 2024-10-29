import { BaseCustomerEntity } from "./customer";
import { BaseEntity } from "./entity";
import { BaseSparePartEntity } from "./spareParts";

export interface BaseRepairEntity extends BaseEntity {
  customer: BaseCustomerEntity;
  code: string;
  spareParts: BaseSparePartEntity[];
  phoneLock: string | undefined;
  simLock: string | undefined;
  latestStatus: string;
  discountRate: number;
  invoiceNumber: number;
}
