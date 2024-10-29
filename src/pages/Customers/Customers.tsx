import { DataTable } from "@/components/DataTable";
import { DataTableColumnHeader } from "@/components/DataTable/DataTableColumnHeader";
import { useModal } from "@/core/hooks";
import Content from "@/core/layouts/Content";
import { ColumnDef } from "@tanstack/react-table";
import AddCustomerModal from "./modals/AddCustomerModal";
import { CustomerType } from "@/pages/Customers/types.ts";
import TableActionsMenu from "@/components/TableActions.tsx";

const CustomersPage = () => {
  const addCustomer = useModal();
  const columns: ColumnDef<CustomerType>[] = [
    {
      accessorKey: "fullName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" />
      ),
      enableColumnFilter: true,
      id: "fullName",
      size: 30,
      enableResizing: false,
    },
    {
      accessorKey: "phoneNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone Number" />
      ),
      enableColumnFilter: true,
      id: "phoneNumber",
      size: 30,
    },
    {
      accessorKey: "uuid",
      header: "",
      cell: ({ row }) => (
        <div className="w-full flex items-center gap-2 justify-end">
          {/*<Button size="sm" className="p-0 px-2">*/}
          {/*  <Pencil className="h-5 w-5" />*/}
          {/*</Button>*/}
          {/*<GotoDetailButton url={`${URLS.CUSTOMERS}/${row.getValue("uuid")}`} />*/}
          <TableActionsMenu
            editAction={() => alert(row.getValue("uuid"))}
            deleteAction={() => alert(row.getValue("uuid"))}
          />
        </div>
      ),
      size: 10,
    },
  ];
  const data: CustomerType[] = [
    {
      uuid: "12121",
      fullName: "Ali Safak",
      phoneNumber: "+905354653077",
      firstName: "Ali Emre",
      lastName: "Safak",
    },
    {
      uuid: "12121",
      fullName: "Emre Şafak",
      phoneNumber: "+905354653077",
      firstName: "Ali Emre",
      lastName: "Safak",
    },
  ];
  return (
    <Content
      title="Customers"
      addButton={{
        title: "Add Customer",
        onAction: addCustomer.openModal,
      }}
    >
      <DataTable columns={columns} data={data} />
      <AddCustomerModal
        open={addCustomer.open}
        onClose={addCustomer.closeModal}
      />
    </Content>
  );
};

export default CustomersPage;
