import { DataTable } from "@/components/DataTable";
import Content from "@/core/layouts/Content";
import { SparePartType } from "@/pages/SpareParts/types.ts";
import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

const SparePartsPage = () => {
  const columns: ColumnDef<SparePartType>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "brand", header: "Brand" },
    { accessorKey: "model", header: "Model" },
    { accessorKey: "priceWithCurrency", header: "Price" },
    { accessorKey: "amount", header: "Amount" },
    { accessorKey: "leftAmount", header: "Left Amount" },
    { accessorKey: "tempAmount", header: "Reserve Amount" },
  ];
  const mocksData: SparePartType[] = [
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
    {
      uuid: "d9caf549-3e98-4fe7-9832-9dec4dbcea4b",
      name: "iPhone 6 Battery",
      brand: "Apple",
      model: "iPhone 6",
      price: 500.0,
      priceWithCurrency: "500.0 €",
      amount: 50,
      leftAmount: 50,
      tempAmount: 0,
    },
    {
      uuid: "7f1ef437-76e8-4dd1-8624-57576d403903",
      name: "iPhone 15 Screen",
      brand: "Apple",
      model: "iPhone 15",
      price: 1200.0,
      priceWithCurrency: "1200.0 €",
      amount: 10,
      leftAmount: 10,
      tempAmount: 0,
    },
    {
      uuid: "b6a7eb68-a669-4516-b29b-45845093817f",
      name: "iPhone 15 Battery",
      brand: "Apple",
      model: "iPhone 15",
      price: 500.0,
      priceWithCurrency: "500.0 €",
      amount: 10,
      leftAmount: 10,
      tempAmount: 0,
    },
    {
      uuid: "ba36b1b6-27c6-46e7-b6bc-600916f40c4a",
      name: "iPhone 6 Yan Sanayi",
      brand: "Apple",
      model: "iPhone 6s",
      price: 100.0,
      priceWithCurrency: "100.0 €",
      amount: 10,
      leftAmount: 10,
      tempAmount: 0,
    },
  ];
  const { t } = useTranslation();
  return (
    <Content
      title={t("spareParts.title")}
      addButton={{ title: t("spareParts.addButton"), onAction: () => alert(1) }}
    >
      <DataTable columns={columns} data={mocksData ?? []} />
    </Content>
  );
};

export default SparePartsPage;
