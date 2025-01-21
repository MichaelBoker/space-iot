import Wrapper from "../assets/Wrappers/DateRecord"

const DateRecord = ({title, name, dateFrom, DateTo}) => {
  return (
    <Wrapper className="date-record list-row">
        <section className="record-section">
            <h5>{title}</h5>
        </section>
        <section className="record-section">
            <div className=""><span className="row-title">Reserved for: </span><span>{name}</span></div>
        </section>
        <section className="record-section">
            <div><span className="row-title">From: </span><span>{dateFrom}</span></div>
            <div><span className="row-title">To: </span><span>{DateTo}</span></div>
        </section>
    </Wrapper>
  )
}
export default DateRecord