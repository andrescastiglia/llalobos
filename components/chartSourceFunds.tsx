"use client";

import { SourceFunds } from "@/app/ui/funds";
import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Label } from "recharts";
import nextConfig from "@/base/next.config";
import { fix_name } from "@/app/ui/const";

interface SourceFundsPageProps {
  sourceFunds: SourceFunds[];
}

export const ChartSourceFunds: React.FC<SourceFundsPageProps> = ({
  sourceFunds,
}) => {
  if (sourceFunds.length < 1) return <div></div>;

  const cx = 200;
  const cy = 150;
  const iR = 50;
  const oR = 100;

  return (
    <ResponsiveContainer width={400} height={200}>
      <PieChart width={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={sourceFunds}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          label={({ name }) => `${fix_name(name)}`}
        >
          <Label value="Origen" position="bottom" dx={0} dy={100} />
        </Pie>
        <Tooltip
          formatter={(value: number) =>
            value.toLocaleString(nextConfig.i18n?.defaultLocale)
          }
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
