import { Button } from "@/core/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface GotoDetailButtonProps {
  url: string;
}

const GotoDetailButton: FC<GotoDetailButtonProps> = ({ url }) => {
  return (
    <Link to={url}>
      <Button size="sm" className="p-0 px-2">
        <ArrowRight className="h-5 w-5" />
      </Button>
    </Link>
  );
};

export default GotoDetailButton;
