const SQLite = require('react-native-sqlite-storage'); 
const db = SQLite.openDatabase('devices.db'); 

//initializes a SQLite database table
const init = () => {

    const promise = new Promise((resolve , reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS devices (id INTEGER PRIMARY KEY NOT NULL, deviceName TEXT NOT NULL, deviceType TEXT NOT NULL, deviceStatus TEXT NOT NULL); ',[],
                () => {
                    resolve(); 
                },
                (_,err) => {
                    reject(err); 
                },
            );
        });
    });
    return promise;
}; 

//Add a device
const addDevice = (deviceName , deviceType ,deviceStatus ) => {
    const promise = new Promise ((resolve , reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO devices (deviceName , deviceType , deviceStatus ) VALUES (?,?,?);',[deviceName,deviceType, deviceStatus ],
                (_, result) => {
                    resolve(result); 
                },
                (_,err) => {
                    reject(err);
                    console.log(err.message, 'err');
                },
            );
        });
    });
    return promise; 
};


//Get all deivces
const fetchDevices = () => {
    const promise = new Promise((resolve , reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM devices',
                [], 
                (_,result) => {
                    console.log(result, 'fetch');
                    var deviceData = []; 
                    for (var i = 0 ; i <= result.rows.length - 1; i++) {
                        const device = result.rows.item([i]); 
                        deviceData.push(device); 
                    }
                    resolve(deviceData); 
                },
                (_,err) => {
                    reject(err); 
                    console.log(err , 'error');
                },
            );
        });
    });
    return promise;
}; 

//Delete a device 
const deleteDevice = (id) => {
    const promise = new Promise ((resolve , reject ) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM devices WHERE id=${id}',[],
                (_,result) => {
                    console.log(result , 'deleted device');
                    resolve(result); 
                },
                (_,err) => {
                    reject(err) ;
                    console.log(err, 'error');
                },
            );
        });
    });
    return promise;
};

//Update a device
const updateDevice = (deviceName,deviceType,deviceStatus , id) => {
    const promise = new Promise((resolve , reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE devices SET deviceName=? , deviceType=?, deviceStatus=?, WHERE id=?', [deviceName , deviceType , deviceStatus , id], 
                (_,result) => {
                    console.log(result , 'updated device');
                    resolve(result); 
                }, 
                (_,err) => {
                    reject(err); 
                    console.log(err.message, 'error');
                },
            );
        });
    });
    return promise; 
};

//Remove all the devices 
const removeAllDevices = () => {
    const promise = new Promise((resolve , reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM devices', [], 
                (_,result) => {
                    console.log(result , 'removed all devices');
                    resolve(result); 
                }, 
                (_,err) => {
                    reject(err); 
                    console.log(err.message, 'error');
                },
            );
        });
    });
    return promise;
};

module.exports = {
    init , 
    addDevice,
    fetchDevices,
    deleteDevice,
    updateDevice,
    removeAllDevices,
};



//TEST
//Database initialization
init()
.then(() => {
    console.log("Database initialized successfully");
})
.catch((error) => {
    console.error("Error initializing database:", error);
});

//Test adding a device 
addDevice("LightSwitch1", "Light", "Active") 
.then((result) => {
    console.log("Device added successfully:", result);
})
.catch((error) => {
    console.error("Error adding device:", error);
});

//Test Fetching devices
fetchDevices()
.then((devices) => {
    console.log("Devices retrieved successfully:", devices);
})
.catch((error) => {
    console.error("Error fetching devices:", error);
}); 

//Test updating a device
const deviceId = 1; 
updateDevice("LightSwitch02" , "Light" , "OFF", deviceId)
.then((result) => {
    console.log("Device updated successfully:", result);
})
.catch((error) => {
    console.error("Error updating device:" , error);
})

//Test deleting a device  
deleteDevice(deviceId)
.then((result) => {
    console.log("Device deleted successfully:", result);
})
.catch((error) => {
    console.error("Error deleting device:" ,error);
}); 

//Test Removing all devices
removeAllDevices()
.then((result) => {
    console.log("All devices removed successfully:" , result);
})
.catch((error) => {
    console.error("Error removing all devices:", error);
});

