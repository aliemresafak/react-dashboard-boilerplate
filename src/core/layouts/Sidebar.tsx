import { Button } from "@/core/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/core/components/ui/tooltip";
import URLS from "@/core/urls";
import {
  CircleHelp,
  CircleUserRound,
  FileText,
  Package,
  Settings,
  Triangle,
  Users,
  Wrench,
} from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavLink {
  title: string;
  icon: React.ReactNode;
  url: string;
  soon?: boolean;
}

type NavLinkTooltipProps = NavLink;

const NavLinkTooltip: FC<NavLinkTooltipProps> = ({
  icon,
  title,
  url,
  soon,
}) => {
  return (
    <TooltipProvider key={title} delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={soon ? "#" : url}>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label={title}
              disabled={soon}
            >
              {icon}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          {title} {soon && "(Soon)"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = () => {
  const navLinks: NavLink[] = [
    {
      title: "Customers",
      url: URLS.CUSTOMERS,
      icon: <Users className="size-5" />,
    },
    {
      title: "Repairs",
      url: URLS.REPAIRS,
      icon: <Wrench className="size-5" />,
    },
    {
      title: "Spare Parts",
      url: URLS.SPARE_PARTS,
      icon: <Package className="size-5" />,
    },
    {
      title: "Reports",
      url: "",
      icon: <FileText className="size-5" />,
      soon: true,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings className="size-5" />,
    },
  ];
  const bottomNavLinks: NavLink[] = [
    {
      title: "Help",
      url: URLS.HELP,
      icon: <CircleHelp className="size-5" />,
      soon: true,
    },
    {
      title: "Account",
      url: URLS.ACCOUNT,
      icon: <CircleUserRound className="size-5" />,
      soon: true,
    },
  ];
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Link to="/">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </Link>
      </div>
      <nav className="grid gap-1 p-2">
        {navLinks.map((navLink: NavLink, index: number) => (
          <NavLinkTooltip
            {...navLink}
            key={[navLink.title, index + 1].join("-")}
          />
        ))}
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        {bottomNavLinks.map((navLink: NavLink, index: number) => (
          <NavLinkTooltip
            {...navLink}
            key={[navLink.title, index + 1].join("-")}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
