import { Button } from "@/core/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface TableActionsMenuProps {
  editAction?: () => void;
  deleteAction?: () => void;
  detailUrl?: string;
}
const TableActionsMenu: FC<TableActionsMenuProps> = ({
  editAction,
  deleteAction,
  detailUrl,
}) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-1 outline-none border-none">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-32 mr-10 min-h-max">
        {!editAction && !deleteAction && !detailUrl ? (
          <div className="px-4 py-2 text-sm">There is no actions</div>
        ) : (
          <>
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuGroup className="text-center">
              {editAction && (
                <DropdownMenuItem onClick={editAction}>Edit</DropdownMenuItem>
              )}
              {deleteAction && (
                <DropdownMenuItem onClick={deleteAction}>
                  Delete
                </DropdownMenuItem>
              )}
              {detailUrl && (
                <DropdownMenuItem onClick={() => navigate(detailUrl)}>
                  Detail
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableActionsMenu;
