import { Button } from "@/core/components/ui/button";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/core/components/ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/core/components/ui/tooltip";
import URLS from "@/core/urls";
import { SquareSlash } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const options = [
    { value: "customers", label: "Customers", url: URLS.CUSTOMERS },
    { value: "repairs", label: "Repairs", url: URLS.REPAIRS },
    { value: "spareParts", label: "Spare Parts", url: URLS.SPARE_PARTS },
    { value: "settings", label: "Settings", url: URLS.SETTINGS },
  ];

  return (
    <div>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(!open)}
            >
              <SquareSlash />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={5} className="mr-5">
            <p className="text-sm">
              Press
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 mx-2">
                <span className="text-xs">⌘</span>K
              </kbd>
              to open quick actions
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandGroup>
          <CommandList className="flex flex-col gap-2 p-0 m-0">
            {options.map((option) => (
              <CommandItem
                className="my-1"
                key={option.value}
                value={option.value}
                onSelect={() => {
                  setOpen(false);
                  navigate(option.url);
                }}
              >
                {option.label}
              </CommandItem>
            ))}
          </CommandList>
        </CommandGroup>
      </CommandDialog>
    </div>
  );
};

export default CommandMenu;
