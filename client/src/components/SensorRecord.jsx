import Wrapper from "../assets/Wrappers/Sensor"
import { SENSOR_STATUS_ICON } from "../utils/constant"

const SensorRecord = ({id, name, type, status, currentData}) => {
  return (
    <Wrapper id={`sensor-${id}`} className="sensor-record list-row">
        <section className="record-section">
        <span className={`sensor-icon ${type}-icon`}>
        </span>
            <h5>{name}</h5>
        </section>
        <section className="record-section">
            <h2>{currentData}</h2>
        </section>
        <section className="record-section">
            <a href={`/${id}`}>More info</a>
        </section>
        <section className="record-section">
            <span className="status">
                {SENSOR_STATUS_ICON[status]()}
            </span>
        </section>
    </Wrapper>
  )
}
export default SensorRecord