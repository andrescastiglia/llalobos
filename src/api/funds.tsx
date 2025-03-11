import { baseUrl } from "./const";

export interface SourceFunds {
  name: string;
  value: number;
}

export async function funds(): Promise<SourceFunds[]> {
  const timestamp = Date.now();
  const response = await fetch(`${baseUrl}/api/funds?t=${timestamp}`);
  if (!response.ok) throw new Error("Error fetching funds");
  const data = await response.json();
  return data.map((item: SourceFunds) => ({
    ...item,
    value: Number(item.value)
  }));
}