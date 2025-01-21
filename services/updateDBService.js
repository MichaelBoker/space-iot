import handleUpdate from "./sensorService.js"


const updateData = async (message, id) => {
    for(let sensor in message){
        console.log(sensor)
        handleUpdate(id, sensor, message[sensor])
    }
}

export default updateData