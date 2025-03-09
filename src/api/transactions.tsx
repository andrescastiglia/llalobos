import { baseUrl } from "./const";

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
  | "PAYOUT";

function direction(transactionType: TransactionType): 1 | -1 | 0 {
  switch (transactionType) {
    case "SETTLEMENT":
      return 1; // Cobro
    case "REFUND":
    case "CHARGEBACK":
    case "DISPUTE":
    case "WITHDRAWAL":
    case "PAYOUT":
      return -1; // Pago
    case "WITHDRAWAL_CANCEL":
      return 1; // Un retiro cancelado es volver a tener el dinero disponible.
    default:
      console.error(`Unknown transaction type: ${transactionType}`);
      return 0;
  }
}

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
      return "Retiro de efectivo";
    case "WITHDRAWAL_CANCEL":
      return "Retiro a la cuenta bancaria cancelado";
    default:
      return "Transaccion desconocida";
  }
}

async function fetchTransactions(): Promise<Journal[]> {
  const timestamp = Date.now();
  const response = await fetch(`${baseUrl}/api/transactions?t=${timestamp}`);
  if (!response.ok) throw new Error("Error fetching transactions");
  const body: Response = await response.json();
  return body.data.map((row) => ({
    id: row.source_id,
    source: row.payer_name,
    date: row.transaction_date,
    amount: row.transaction_amount * direction(row.transaction_type),
    description: description(row.transaction_type),
  }));
}

export default async function transactions(): Promise<Journal[]> {
  let ledger: Journal[] = [];
  try {
    ledger = await fetchTransactions();
  } catch (error) {
    console.error("Failed fetching transactions:", error);
  }
  return ledger;
}
