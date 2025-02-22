import { Journal } from "@/api/transactions";
import React from "react";

interface LedgerPageProps {
  ledger: Journal[];
}

export const Ledger: React.FC<LedgerPageProps> = ({ ledger }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      <div className="bg-transparent p-4">
        <div className="grid grid-cols-4 font-bold text-lg pb-2 border-b border-gray-500">
          <div>Fecha</div>
          <div>Descripción</div>
          <div className="text-right">Aporte</div>
          <div className="text-right">Erogación</div>
        </div>

        {ledger.map((journal) => (
          <div key={journal.id} className="grid grid-cols-4 items-center py-2">
            <div>{journal.date}</div>
            <div>{journal.description}</div>
            <div className="text-right text-blue-700">
              {journal.amount >= 0 ? journal.amount.toLocaleString() : ""}
            </div>
            <div className="text-right text-red-700">
              {journal.amount < 0 ? Math.abs(journal.amount).toLocaleString() : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
