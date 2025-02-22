export interface Journal {
  id: string;
  source: string;
  date: string;
  amount: number;
  description: string;
}

export interface SourceFunds {
  name: string;
  value: number;
}

export interface Goal {
  balance: number;
  target: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchTransactions(): Promise<Journal[]> {
  const response = await fetch("/api/transactions");
  if (!response.ok) throw new Error("Error fetching transactions");
  return response.json();
}

export default async function transactions(): Promise<Journal[]> {
  let ledger: Journal[] = [];

  //try {
  //  ledger = await fetchTransactions();
  //} catch (error) {
  const income1: Journal = {
    id: "1",
    source: "Juan Pérez",
    date: "2024-10-27",
    amount: 1000,
    description: "Contribucion de Juan Pérez",
  };
  const income2: Journal = {
    id: "2",
    source: "María Gómez",
    date: "2024-10-28",
    amount: 2000,
    description: "Contribucion de María Gómez",
  };
  const outcome1: Journal = {
    id: "3",
    source: "Inmobiliaria",
    date: "2024-10-28",
    amount: -2300,
    description: "Alquiler",
  };

  ledger = [income1, income2, outcome1];

  //  console.error("Failed fetching transactions:", error);
  //}

  return ledger;
}

export async function groupBySource(): Promise<SourceFunds[]> {
  const incomes = (await transactions()).filter((item) => item.amount > 0);

  const grouped = incomes.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.source] = (acc[curr.source] || 0) + curr.amount;
    return acc;
  }, {});

  return Object.entries(grouped).map(([name, value]) => ({ name, value }));
}

export async function goal(): Promise<Goal> {
  return { balance: 100, target: 3000 };
}
