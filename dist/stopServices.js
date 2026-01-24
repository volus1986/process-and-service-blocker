"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stopServices;
const child_process_1 = require("child_process");
function stopService(serviceName) {
    (0, child_process_1.exec)(`sc stop ${serviceName}`, (err, out, stopErr) => {
        if (err) {
            console.error(`Error stopping service: ${err.message}`);
            return;
        }
        if (stopErr) {
            console.error(`Error output: ${stopErr}`);
            return;
        }
        console.log(`Service ${serviceName} stopped successfully.`);
    });
}
function disableService(serviceName) {
    (0, child_process_1.exec)(`sc config ${serviceName} start= disabled`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error disabling service: ${err.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error output: ${stderr}`);
            return;
        }
        console.log(`Service ${serviceName} disabled successfully.`);
    });
}
// Function to stop Windows Update service
function stopWindowsUpdateSafe(serviceName) {
    (0, child_process_1.exec)(`sc query ${serviceName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error querying service: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error output: ${stderr}`);
            return;
        }
        // console.log(stdout) // todo: logger
        if (stdout.includes('RUNNING')) {
            disableService(serviceName);
            stopService(serviceName);
        }
    });
}
function stopServices(serviceNames) {
    serviceNames.forEach(stopWindowsUpdateSafe);
}
