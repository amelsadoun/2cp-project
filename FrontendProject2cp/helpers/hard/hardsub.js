import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('test_wifi', (err) => {
        if (err) {
            console.error('Error subscribing to test_wifi:', err);
        } else {
            console.log('Subscribed to test_wifi topic');
        }
    });
});

client.on('message', (topic, message) => {
    if (topic === 'test_wifi') {
        console.log('Received message from test_wifi:', message.toString());
    }
});

client.on('error', (err) => {
    console.error('Error:', err);
});
