import { DataTable } from "@/components/DataTable";
import TableActionsMenu from "@/components/TableActions";
import { Button } from "@/core/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/components/ui/popover";
import { useModal } from "@/core/hooks";
import Content from "@/core/layouts/Content";
import URLS from "@/core/urls";
import { CustomerType } from "@/pages/Customers/types";
import { ColumnDef } from "@tanstack/react-table";
import { SparePartType } from "../SpareParts/types";
import { mocksData } from "./mockData";
import AddRepairModal from "./modals/AddRepairModal";
import { RepairType } from "./types";

const RepairsPage = () => {
  const addRepair = useModal();
  const columns: ColumnDef<RepairType>[] = [
    { accessorKey: "code", header: "Code" },
    {
      accessorKey: "customer",
      header: "Customer",
      cell: ({ row }) => {
        const customer = row.getValue("customer") as CustomerType;
        return <span>{customer.fullName}</span>;
      },
    },
    {
      accessorKey: "spareParts",
      header: "Spare Parts Count",
      cell: ({ row }) => {
        const spareParts = row.getValue("spareParts") as SparePartType[];
        return (
          <Popover>
            <PopoverTrigger>
              <Button size="sm">{spareParts.length} Spare Parts</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-2">
                {spareParts.map((sparePart: SparePartType, index: number) => (
                  <span className="text-xs flex items-center gap-2">
                    <span className="font-semibold">[{sparePart.brand}]</span>
                    {sparePart.name}
                  </span>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        );
      },
    },
    {
      accessorKey: "latestStatus",
      header: "Latest Status",
    },
    {
      accessorKey: "uuid",
      header: "",
      cell: ({ row }) => (
        <TableActionsMenu
          detailUrl={`${URLS.REPAIRS}/${row.getValue("uuid")}`}
        />
      ),
    },
  ];
  return (
    <Content
      title="Repairs"
      addButton={{ title: "Add Repair", onAction: addRepair.openModal }}
    >
      <DataTable columns={columns} data={mocksData} />
      <AddRepairModal open={addRepair.open} onClose={addRepair.closeModal} />
    </Content>
  );
};

export default RepairsPage;
