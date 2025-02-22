"use client";

import { Goal } from "@/api/transactions";
import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";

interface GoalPageProps {
  goal: Goal;
}

export const ChartTarget: React.FC<GoalPageProps> = ({ goal }) => {
  const cx = 200;
  const cy = 150;
  const iR = 50;
  const oR = 100;
  const RADIAN = Math.PI / 180;
  const data = [
    { name: "A", value: goal.target * 0.75, color: "#b91c1c" },
    { name: "B", value: goal.target * 0.25, color: "#ffff00" },
    {
      name: "C",
      value: goal.balance < goal.target ? 0 : goal.balance - goal.target,
      color: "#00ff00",
    },
  ];
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });

  const ang = 180.0 * (1 - goal.balance / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return (
    <ResponsiveContainer width={400} height={200}>
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <Label value="Objetivo" position="bottom" dx={0} dy={100} />
        </Pie>
        <circle
          key="circle"
          cx={x0}
          cy={y0}
          r={r}
          fill="#1d4ed8"
          stroke="none"
        />
        <path
          key="path"
          d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
          stroke="#none"
          fill="#1d4ed8"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
