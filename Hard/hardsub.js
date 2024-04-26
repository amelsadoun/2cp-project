const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('LightSwitch1', (err) => {
        if (err) {
            console.error('Error subscribing to LightSwitch1:', err);
        } else {
            console.log('Subscribed to LightSwitch1 topic');
        }
    });
});

client.on('message', (topic, message) => {
    if (topic === 'LightSwitch1') {
        console.log('Received message from LightSwitch1:', message.toString());
    }
});

client.on('error', (err) => {
    console.error('Error:', err);
});