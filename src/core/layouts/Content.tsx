import { Button } from "@/core/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card";
import { ChevronLeft, Pencil, Plus } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface AdditionalAction {
  title: string;
  onAction: () => void;
}
interface DashboardCardProps {
  title: string;
  backUrl?: string;
  addButton?: AdditionalAction;
  editButton?: AdditionalAction;
}

const BackButton = ({ backUrl }: Pick<DashboardCardProps, "backUrl">) => {
  return backUrl ? (
    <Link to={backUrl}>
      <Button className="p-0 px-1">
        <ChevronLeft />
      </Button>
    </Link>
  ) : undefined;
};

const AddEditButton = (
  addButton: AdditionalAction & { buttonType: "ADD" | "EDIT" }
) => {
  return addButton ? (
    <Button
      className="flex items-center gap-1 px-2 sm:pr-2 md:pr-4 ml-auto"
      onClick={addButton.onAction}
    >
      {addButton.buttonType === "ADD" ? (
        <Plus className="h-5 w-5" />
      ) : (
        <Pencil className="w-5 h-5" />
      )}
      <span className="sm:hidden md:flex">{addButton.title}</span>
    </Button>
  ) : undefined;
};

const Content: FC<PropsWithChildren<DashboardCardProps>> = ({
  title,
  children,
  backUrl,
  addButton,
  editButton,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-5">
          {backUrl && <BackButton backUrl={backUrl} />}
          {title}
          <div className="ml-auto flex items-center gap-2">
            {addButton && <AddEditButton {...addButton} buttonType="ADD" />}
            {editButton && <AddEditButton {...editButton} buttonType="EDIT" />}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Content;
