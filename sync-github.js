// GitHub Gist Alternative
// Gunakan GitHub Gist sebagai database
// Setup: https://docs.github.com/en/rest/gists/gists

window.__github_config = {
    token: "YOUR_GITHUB_TOKEN", // Personal Access Token
    gistId: "YOUR_GIST_ID", // ID dari Gist yang sudah dibuat
    filename: "absensi-logs.json",
    useGitHub: false // Set true untuk aktifkan
};

window.GitHubSync = class {
    constructor(config) {
        this.token = config.token;
        this.gistId = config.gistId;
        this.filename = config.filename;
        this.baseUrl = 'https://api.github.com';
    }

    async readLogs() {
        try {
            const response = await fetch(`${this.baseUrl}/gists/${this.gistId}`, {
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (response.ok) {
                const gist = await response.json();
                const content = gist.files[this.filename]?.content;
                return content ? JSON.parse(content) : [];
            }
        } catch (error) {
            console.error('GitHub read error:', error);
        }
        return [];
    }

    async writeLogs(logs) {
        try {
            const response = await fetch(`${this.baseUrl}/gists/${this.gistId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: {
                        [this.filename]: {
                            content: JSON.stringify(logs, null, 2)
                        }
                    }
                })
            });
            
            return response.ok;
        } catch (error) {
            console.error('GitHub write error:', error);
        }
        return false;
    }

    async syncLogs(logData) {
        const currentLogs = await this.readLogs();
        currentLogs.push(logData);
        await this.writeLogs(currentLogs);
        return currentLogs;
    }

    // Auto-sync setiap 15 detik (GitHub rate limit)
    startAutoSync() {
        setInterval(async () => {
            const logs = await this.readLogs();
            if (JSON.stringify(logs) !== JSON.stringify(window.cloudLogs)) {
                window.cloudLogs = logs;
                localStorage.setItem('abs_logs', JSON.stringify(logs));
                if (typeof window.refreshAllUI === 'function') window.refreshAllUI();
            }
        }, 15000);
    }
};

/*
CARA SETUP GITHUB GIST:
1. Buat Personal Access Token di GitHub Settings
2. Buat Gist baru dengan file absensi-logs.json
3. Copy Gist ID dari URL
4. Update konfigurasi di atas

KELEBIHAN:
- Gratis dan unlimited storage
- Version control otomatis
- Bisa diakses dari mana saja
- Rate limit yang reasonable

KEKURANGAN:
- Tidak real-time (perlu polling)
- Rate limit GitHub API
- Setup lebih kompleks
*/
