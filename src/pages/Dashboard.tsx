import Statistic from "@/components/Statistic";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/core/components/ui/tabs";
import Content from "@/core/layouts/Content";
import { DollarSign, Package, Users, Wrench } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { BaseRepairEntity } from "@entities/repair.ts";
import { DataTable } from "@/components/DataTable";
import { Link } from "react-router-dom";
import { CustomerType } from "@/pages/Customers/types.ts";
import URLS from "@/core/urls.ts";

const Dashboard = () => {
  const columns: ColumnDef<BaseRepairEntity>[] = [
    { accessorKey: "code", header: "Repair Code" },
    {
      accessorKey: "customer",
      header: "Customer",
      // cell: ({ row }) => <span>{row.getValue("customer").fullName}</span>,
      cell: ({ row }) => {
        const customer: CustomerType = row.getValue("customer");
        return (
          <Link
            to={`${URLS.CUSTOMERS}/${customer.uuid}`}
            className="text-primary"
          >
            {customer.fullName}
          </Link>
        );
      },
    },
  ];
  const mocksData: BaseRepairEntity[] = [
    {
      uuid: "690606bb-bb33-4cc3-a9a3-55f8b07970b2",
      customer: {
        uuid: "0073d52b-464a-438b-8b08-ab404ca409c5",
        firstName: "Laura",
        lastName: "Munoz",
        fullName: "Laura Munoz",
        phoneNumber: "+240353285602",
      },
      code: "k29LTRsg",
      spareParts: [
        {
          uuid: "f62bb91e-6f68-409d-8b83-317860782919",
          name: "iPhone 6 Screen",
          brand: "Apple",
          model: "iPhone 12 Pro",
          price: 1000.0,
          priceWithCurrency: "1000.0 €",
          amount: 10,
          leftAmount: 10,
          tempAmount: 0,
        },
      ],
      phoneLock: null,
      simLock: null,
      latestStatus: "REPAIRED",
      discountRate: 20,
      invoiceNumber: 1,
    },
  ];
  return (
    <Content title="Dashboard">
      <div className="space-y-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Statistic
            title="Total Revenue"
            value="$45,231.89"
            comparedPercentValue="+20.1"
            icon={<DollarSign />}
          />
          <Statistic
            title="Total Customers"
            value="123"
            comparedPercentValue="+20"
            icon={<Users />}
          />
          <Statistic
            title="Total Repairs"
            value="1230"
            comparedPercentValue="-10"
            icon={<Wrench />}
          />
          <Statistic
            title="Total Spare Parts"
            value="50"
            comparedPercentValue="-10"
            icon={<Package />}
          />
        </div>
        <Tabs defaultValue="waiting">
          <TabsList>
            <TabsTrigger value="waiting">Waiting</TabsTrigger>
            <TabsTrigger value="repairing">Repairing</TabsTrigger>
            <TabsTrigger value="repaired">Repaired</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="waiting">
            <DataTable columns={columns} data={mocksData} />
          </TabsContent>
          <TabsContent value="repairing">Repairing</TabsContent>
          <TabsContent value="repaired">Repaired</TabsContent>
          <TabsContent value="cancelled">Cancelled</TabsContent>
        </Tabs>
      </div>
    </Content>
  );
};

export default Dashboard;
