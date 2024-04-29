import mqtt from 'mqtt';
import { fetchDevices } from '../index.js';

// MQTT broker connection configuration
const mqttBrokerUrl = 'mqtt://192.168.240.205';
const client = mqtt.connect(mqttBrokerUrl);

// Function to handle MQTT client connection
client.on('connect', () => {
    console.log('Connected to MQTT broker');

    // Fetch devices from the database
    fetchDevices()
        .then(devices => {
            // Iterate over each device and publish its status
            devices.forEach(device => {
                const { deviceName, deviceStatus } = device;
                publishMessage(deviceName, deviceStatus);
            });
        })
        .catch(error => {
            console.error('Error fetching devices:', error);
        });
});

// Handle errors from MQTT client
client.on('error', (err) => {
    console.error('Error:', err);
});

// Function to publish message to MQTT broker
function publishMessage(deviceName, message) {
    client.publish(deviceName, message);
    console.log(`Published message to '${deviceName}': ${message}`);
}