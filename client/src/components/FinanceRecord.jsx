import Wrapper from "../assets/Wrappers/FinanceRecord"

const FinanceRecord = ({title, description, amount, invoice, date}) => {
  return (
    <Wrapper className="finance-record list-row">
        <section className="record-section">
            <h5>{title}</h5>
            <p className="finance-desc">{description}</p>
        </section>
        <section className="record-section">
            <h2><span className="currency-sign">$</span>{amount}</h2>
        </section>
        <section className="record-section finance-right">
            <span className="finance-date">{date}</span>
            <a href={invoice}>Invoice</a>
        </section>
        
    </Wrapper>
  )
}

export default FinanceRecord