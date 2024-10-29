import { Card, CardContent } from "@/core/components/ui/card";
import { FC } from "react";

interface StatisticProps {
  title: string;
  value: string;
  comparedPercentValue: string;
  icon: React.ReactNode;
}

const Statistic: FC<StatisticProps> = ({
  title,
  value,
  comparedPercentValue,
  icon,
}) => {
  return (
    <Card>
      <CardContent>
        <div className="pt-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight text-sm font-medium">{title}</h3>
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">
            {comparedPercentValue}% from last month
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Statistic;
