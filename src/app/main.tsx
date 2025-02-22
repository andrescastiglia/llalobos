import transactions, {
  groupBySource,
  Journal,
  SourceFunds,
  Goal,
  goal,
} from "@/api/transactions";
import { Ledger } from "@/components/ledger";
import { ChartSourceFunds } from "@/components/chartSourceFunds";
import { ChartTarget } from "@/components/chartTarget";

export default async function main() {
  const ledger: Journal[] = await transactions();
  const sourceFunds: SourceFunds[] = await groupBySource();
  const goals: Goal = await goal();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="flex justify-center">
        <ChartTarget goal={goals} />
      </div>
      <div className="flex justify-center">
        <ChartSourceFunds sourceFunds={sourceFunds} />
      </div>
      <div className="col-span-1 md:col-span-2">
        <Ledger ledger={ledger} />
      </div>
    </main>
  );
}
