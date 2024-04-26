const mqtt = require('mqtt');
const { fetchDevices } = require('../index.js'); 

const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    
    fetchDevices()
        .then(devices => {
            devices.forEach(device => {
                const { deviceName, deviceStatus } = device;
                publishMessage(deviceName, deviceStatus);
            });
        })
        .catch(error => {
            console.error('Error fetching devices:', error);
        });
});

client.on('error', (err) => {
    console.error('Error:', err);
});

function publishMessage(deviceName, message) {
    client.publish(deviceName, message);
    console.log(`Published message to '${deviceName}': ${message}`);
}
