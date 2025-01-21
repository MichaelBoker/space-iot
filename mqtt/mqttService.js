import * as mqtt from "mqtt";
import { getConnectionURL, getMqttOptions } from "./mqttUtils.js";
import { startAnalysis} from '../services/analysisService.js'
import updateData from "../services/updateDBService.js";

const handleMessage = async (topic, message) => {
    console.log(`message receive for topic: ${topic} , message: ${message}`)

    const vesselId = topic.split('/')[1]
    const messageString = message.toString()
    const messageJson = JSON.parse(messageString)
    
    if(topic.includes('notification')){
      updateData(messageJson,vesselId)
    }
    else{
      startAnalysis(messageJson, vesselId)
    }
}

let mqttClient;

 
const MQTTService = {  
  
  connect() {
    mqttClient = mqtt.connect(getConnectionURL(), getMqttOptions())

    mqttClient.on("connect", () => {
      console.log("connected to mqtt");
    });

    mqttClient.on("error", (err) => {
      console.log(err);
      mqttClient.end();
    });

    mqttClient.on('message',handleMessage)

    this.subscribe('notification/#')
    this.subscribe('error/#')
  },

  subscribe(topic) {
    mqttClient.subscribe(topic);
    console.log(`${topic} subscribe`)
  }
  
}

export default MQTTService