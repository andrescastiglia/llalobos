import { baseUrl } from "./const";

export interface Goal {
  balance: number;
  target: number;
}

export async function goal(): Promise<Goal> {
  const response = await fetch(`${baseUrl}/api/goal`);
  if (!response.ok) throw new Error("Error fetching transactions");
  return response.json();
}
