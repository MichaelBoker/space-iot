import { useLoaderData } from "react-router-dom";
import SearchContainer from "../../components/SearchContainer";
import SensorRecord from "../../components/SensorRecord";
import api from "../../utils/httpRequest";
import { searchParams } from "./sensor.metadata";

export const loader = async ({ request }) => {
  const params = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  );

  try {
    const sensors = await api.get("/component", { params: params });
    return sensors.data;
  } catch (error) {
    return error;
  }
};

const VesselInfo = () => {
  const {components} = useLoaderData()

  return (
    <div>
      <SearchContainer searchParams={searchParams} />
      <section id="all-sensors">
        {
          components.map((sensor) => <SensorRecord key={sensor.id} {...sensor}/>)
        }
        {/* <SensorRecord
          id="1"
          name="Engine Voltage (Port)"
          type="BATTERY"
          status="OK"
          currentData={26.6}
        /> */}
      </section>
    </div>
  );
};
export default VesselInfo;
