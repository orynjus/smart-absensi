// JSONBin.io Alternative
// Free JSON storage dengan REST API
// Signup: https://jsonbin.io/

window.__jsonbin_config = {
    apiKey: "YOUR_JSONBIN_API_KEY",
    binId: "YOUR_BIN_ID", // Dapatkan setelah create bin
    useJsonBin: false // Set true untuk aktifkan
};

window.JSONBinSync = class {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.binId = config.binId;
        this.baseUrl = 'https://api.jsonbin.io/v3';
        this.lastUpdate = 0;
    }

    async readLogs() {
        try {
            const response = await fetch(`${this.baseUrl}/b/${this.binId}/latest`, {
                headers: {
                    'X-Master-Key': this.apiKey
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                return data.record || [];
            }
        } catch (error) {
            console.error('JSONBin read error:', error);
        }
        return [];
    }

    async writeLogs(logs) {
        try {
            const response = await fetch(`${this.baseUrl}/b/${this.binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.apiKey
                },
                body: JSON.stringify(logs)
            });
            
            if (response.ok) {
                this.lastUpdate = Date.now();
                return true;
            }
        } catch (error) {
            console.error('JSONBin write error:', error);
        }
        return false;
    }

    async syncLogs(logData) {
        const currentLogs = await this.readLogs();
        currentLogs.push(logData);
        await this.writeLogs(currentLogs);
        return currentLogs;
    }

    // Auto-sync setiap 10 detik
    startAutoSync() {
        setInterval(async () => {
            const logs = await this.readLogs();
            if (JSON.stringify(logs) !== JSON.stringify(window.cloudLogs)) {
                window.cloudLogs = logs;
                localStorage.setItem('abs_logs', JSON.stringify(logs));
                if (typeof window.refreshAllUI === 'function') window.refreshAllUI();
            }
        }, 10000);
    }
};
