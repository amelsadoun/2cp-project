const sqlite3 = require('sqlite3').verbose();

// Open database connection
const db = new sqlite3.Database('devices.db');

// Initialize database table
const init = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS devices (
            id INTEGER PRIMARY KEY NOT NULL,
            deviceName TEXT NOT NULL,
            deviceType TEXT NOT NULL,
            deviceStatus TEXT NOT NULL
        )
    `;
    return new Promise((resolve, reject) => {
        db.run(sql, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

// Add a device
const addDevice = (deviceName, deviceType, deviceStatus) => {
    const sql = 'INSERT INTO devices (deviceName, deviceType, deviceStatus) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.run(sql, [deviceName, deviceType, deviceStatus], function (err) {
            if (err) reject(err);
            else resolve(this.lastID);
        });
    });
};

// Fetch all devices
const fetchDevices = () => {
    const sql = 'SELECT * FROM devices';
    return new Promise((resolve, reject) => {
        db.all(sql, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

// Delete a device
const deleteDevice = (id) => {
    const sql = 'DELETE FROM devices WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.run(sql, id, function (err) {
            if (err) reject(err);
            else resolve(this.changes);
        });
    });
};

// Update a device
const updateDevice = (deviceName, deviceType, deviceStatus, id) => {
    const sql = 'UPDATE devices SET deviceName = ?, deviceType = ?, deviceStatus = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.run(sql, [deviceName, deviceType, deviceStatus, id], function (err) {
            if (err) reject(err);
            else resolve(this.changes);
        });
    });
};

// Remove all devices
const removeAllDevices = () => {
    const sql = 'DELETE FROM devices';
    return new Promise((resolve, reject) => {
        db.run(sql, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

// Export functions
module.exports = {
    init,
    addDevice,
    fetchDevices,
    deleteDevice,
    updateDevice,
    removeAllDevices
};


// Test database initialization
init()
    .then(() => {
        console.log("Database initialized successfully");

        // Test adding a device
        return addDevice("LightSwitch1", "Light", "Active");
    })
    .then((deviceId) => {
        console.log("Device added successfully with ID:", deviceId);

        // Test updating a device
        const deviceIdis = 1;
        return updateDevice("LightSwitch02", "Light", "OFF", deviceIdis);
    })
    .then((rowsAffected) => {
        console.log("Device updated successfully. Rows affected:", rowsAffected);

        // Test fetching devices
        return fetchDevices();
    })
    .then((devices) => {
        console.log("Devices retrieved successfully:", devices);

        // Test deleting a device
        const deviceIdis = 1; 
        return deleteDevice(deviceIdis);
    })
    .then((rowsAffected) => {
        console.log("Device deleted successfully. Rows affected:", rowsAffected);

        // Test removing all devices
        return removeAllDevices();
    })
    .then(() => {
        console.log("All devices removed successfully");
    })
    .catch((error) => {
        console.error("Error:", error);
    });

