// WebSocket Server Alternative
// Untuk sinkronisasi real-time tanpa Firebase

window.__websocket_config = {
    serverUrl: "ws://localhost:8081", // Ganti dengan server URL Anda
    useWebSocket: false // Set true untuk aktifkan WebSocket
};

// Simple WebSocket implementation
window.WebSocketSync = class {
    constructor(config) {
        this.url = config.serverUrl;
        this.ws = null;
        this.reconnectInterval = 5000;
        this.isConnected = false;
    }

    connect() {
        try {
            this.ws = new WebSocket(this.url);
            
            this.ws.onopen = () => {
                console.log('WebSocket connected');
                this.isConnected = true;
                this.send({ type: 'join', appId: window.appId });
            };

            this.ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'log_update') {
                    window.cloudLogs.push(data.log);
                    localStorage.setItem('abs_logs', JSON.stringify(window.cloudLogs));
                    if (typeof window.refreshAllUI === 'function') window.refreshAllUI();
                }
            };

            this.ws.onclose = () => {
                console.log('WebSocket disconnected');
                this.isConnected = false;
                setTimeout(() => this.connect(), this.reconnectInterval);
            };

            this.ws.onerror = (error) => {
                console.error('WebSocket error:', error);
                this.isConnected = false;
            };
        } catch (error) {
            console.error('Failed to connect WebSocket:', error);
        }
    }

    send(data) {
        if (this.ws && this.isConnected) {
            this.ws.send(JSON.stringify(data));
        }
    }

    broadcastLog(logData) {
        this.send({ type: 'log_update', log: logData });
    }
};

// Simple Node.js WebSocket Server (save sebagai server.js)
/*
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

const clients = new Map();

wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        
        if (data.type === 'join') {
            clients.set(ws, data.appId);
            console.log(`Client joined: ${data.appId}`);
        } else if (data.type === 'log_update') {
            // Broadcast ke semua client dengan appId yang sama
            clients.forEach((appId, client) => {
                if (appId === data.appId && client !== ws) {
                    client.send(JSON.stringify(data));
                }
            });
        }
    });
    
    ws.on('close', () => {
        clients.delete(ws);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server running on port 8081');
*/
