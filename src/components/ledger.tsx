import { Journal } from "@/api/transactions";
import React from "react";

interface LedgerPageProps {
  ledger: Journal[];
}

export const Ledger: React.FC<LedgerPageProps> = ({ ledger }) => {
  return (
<div className="max-w-4xl mx-auto p-1 relative">
  <div className="bg-transparent p-1">
    <div className="grid grid-cols-2 sm:grid-cols-4 font-bold text-base sm:text-lg pb-1 border-b border-gray-500 break-words">
      <div className="hidden sm:block px-2 py-1">Fecha</div>
      <div className="px-2 py-1">Descripción</div>
      <div className="hidden sm:block px-2 py-1 text-right">Aporte</div>
      <div className="hidden sm:block px-2 py-1 text-right">Erogación</div>
      <div className="sm:hidden px-2 py-1 text-right">Monto</div>
    </div>

    {ledger.map((journal) => (
      <div key={journal.id} className="grid grid-cols-2 sm:grid-cols-4 items-center pb-1 text-sm break-words">
        <div className="hidden sm:block px-2 py-1">{journal.date.toLocaleString()}</div>
        <div className="px-2 py-1 truncate">{journal.description}</div>
        <div className="hidden sm:block px-2 py-1 text-right text-blue-700">
          {journal.amount >= 0 ? journal.amount.toLocaleString() : ""}
        </div>
        <div className="hidden sm:block px-2 py-1 text-right text-red-700">
          {journal.amount < 0 ? Math.abs(journal.amount).toLocaleString() : ""}
        </div>
        <div className="sm:hidden px-2 py-1 text-right">
          {journal.amount >= 0 ? (
            <span className="text-blue-700">{journal.amount.toLocaleString()}</span>
          ) : (
            <span className="text-red-700">{Math.abs(journal.amount).toLocaleString()}</span>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};
