import ExpensesAndIncome from "./components/ExpensesAndIncome";
import LatestSpending from "./components/LatestSpending";
import PremiumFeatures from "./components/PremiumFeatures";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="rounded-xl md:flex gap-3">
      <div className="w-full">
        <Sidebar />
      </div>
      <div className="md:w-96 bg-white p-4 ml-28 rounded-xl mt-4 md:mt-0 md:ml-0">
        <ExpensesAndIncome/>
        <LatestSpending/>
        <PremiumFeatures/>
      </div>
    </main>
  )
}
