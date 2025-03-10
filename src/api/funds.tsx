import transactions from "./transactions";

export interface SourceFunds {
  name: string;
  value: number;
}

export async function groupBySource(): Promise<SourceFunds[]> {
  //TODO move to backend
  const incomes = (await transactions(1, 9999)).filter((item) => item.amount > 0);

  const grouped = incomes.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.source] = (acc[curr.source] || 0) + curr.amount;
    return acc;
  }, {});

  return Object.entries(grouped).map(([name, value]) => ({ name, value }));
}
