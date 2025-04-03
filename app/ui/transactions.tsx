import { baseUrl, fix_name } from "@/app/ui/const";

export interface Journal {
  id: string;
  source: string;
  date: Date;
  amount: number;
  description: string;
}

interface ResponseRow {
  transaction_date: Date;
  source_id: string;
  payer_name: string;
  transaction_amount: number;
  transaction_type: TransactionType;
}

interface Response {
  data: ResponseRow[];
  page: number;
  page_size: number;
  total: number;
}

type TransactionType =
  | "SETTLEMENT"
  | "REFUND"
  | "CHARGEBACK"
  | "DISPUTE"
  | "WITHDRAWAL"
  | "WITHDRAWAL_CANCEL"
  | "PAYOUT"
  | "PAYOUTS";

function description(transactionType: TransactionType): string {
  switch (transactionType) {
    case "SETTLEMENT":
      return "Pago aprobado";
    case "REFUND":
      return "Devolución de dinero";
    case "CHARGEBACK":
      return "Contracargo";
    case "DISPUTE":
      return "Reclamo";
    case "WITHDRAWAL":
      return "Retiro de cuenta bancaria";
    case "PAYOUT":
    case "PAYOUTS":
      return "Retiro de efectivo";
    case "WITHDRAWAL_CANCEL":
      return "Retiro a la cuenta bancaria cancelado";
    default:
      return "Transaccion desconocida";
  }
}

async function fetchTransactions(page: number, page_size: number): Promise<Journal[]> {
  const timestamp = Date.now();
  const response = await fetch(`${baseUrl}/api/transactions?page=${page}&page_size=${page_size}&t=${timestamp}`);
  if (!response.ok) throw new Error("Error fetching transactions");
  const body: Response = await response.json();
  return body.data.map((row) => ({
    id: row.source_id,
    source: fix_name(row.payer_name),
    date: row.transaction_date,
    amount: row.transaction_amount,
    description: description(row.transaction_type),
  }));
}

export default async function transactions(page: number, page_size: number): Promise<Journal[]> {
  let ledger: Journal[] = [];
  try {
    ledger = await fetchTransactions(page, page_size);
  } catch (error) {
    console.error("Failed fetching transactions:", error);
  }
  return ledger;
}
