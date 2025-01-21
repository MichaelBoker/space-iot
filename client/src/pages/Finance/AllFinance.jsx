import FinanceRecord from "../../components/FinanceRecord"
import SearchContainer from "../../components/SearchContainer"
import { searchParams } from "./finance.metadata"

const AllFinance = () => {
  return (
    <div id="all-finance">
      <SearchContainer searchParams={searchParams}/>
      <section id="finance-list">
      <FinanceRecord title="finance record" description="description about the finance record" amount="1305.5" invoice="" date="01/01/204"/>
      </section>
    </div>

  )
}
export default AllFinance