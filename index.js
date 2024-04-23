const server = require('./src/server.js'); 

const HOST = 'localhost'; 
let PORT = process.env.PORT || 5000 ; 
server.listen(PORT  , () => console.log(`Server running at ${HOST}:${PORT}`)); 