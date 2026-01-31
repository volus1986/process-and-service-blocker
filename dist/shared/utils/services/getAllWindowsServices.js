"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getAllWindowsServices;
const child_process_1 = require("child_process");
function getAllWindowsServices() {
    return new Promise((resolve, reject) => {
        const args = [
            '-NoProfile',
            '-Command',
            'Get-Service | Select Name, DisplayName, Status | ConvertTo-Json'
        ];
        (0, child_process_1.execFile)('powershell', args, (error, stdout, stderr) => {
            if (error)
                return reject(error);
            if (stderr)
                return reject(new Error(stderr));
            resolve(JSON.parse(stdout));
        });
    });
}
