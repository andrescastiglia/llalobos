import { baseUrl } from "./const";

export interface Goal {
  balance: number;
  target: number;
}

export async function goal(): Promise<Goal> {
  const timestamp = Date.now();
  const response = await fetch(`${baseUrl}/api/goal?t=${timestamp}`);
  if (!response.ok) throw new Error("Error fetching goal");
  return response.json();
}
