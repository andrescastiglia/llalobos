"use client";

import transactions, { Journal } from "@/api/transactions";
import { Ledger } from "@/components/ledger";
import { ChartSourceFunds } from "@/components/chartSourceFunds";
import { ChartTarget } from "@/components/chartTarget";
import { funds, SourceFunds } from "@/api/funds";
import { goal, Goal } from "@/api/goals";
import { useEffect, useState } from "react";

const pageSize = 10;

export default function Balance() {
  const [sourceFunds, setSourceFunds] = useState<SourceFunds[]>([]);
  const [goals, setGoals] = useState<Goal | null>(null);
  const [ledger, setLedger] = useState<Journal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      setSourceFunds(await funds());
      setGoals(await goal());
    };
    load();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setLedger(await transactions(currentPage, pageSize));
    };
    fetch();
  }, [currentPage]);

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = async () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="flex justify-center">
        <ChartTarget goal={goals} />
      </div>
      <div className="flex justify-center">
        <ChartSourceFunds sourceFunds={sourceFunds} />
      </div>
      <div className="col-span-1 md:col-span-2 rounded-2xl shadow-lg ">
        <Ledger ledger={ledger} />
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            &lt;-
          </button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage} disabled={ledger.length === 0}>
            -&gt;
          </button>
        </div>
      </div>
    </main>
  );
}
