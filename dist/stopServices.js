"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stopServices;
const child_process_1 = require("child_process");
function stopService(serviceName) {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(`sc stop ${serviceName}`, (err, out, stopErr) => {
            if (err) {
                console.error(`Error stopping service: ${err.message}`);
                return reject(err);
            }
            if (stopErr) {
                console.error(`Error output: ${stopErr}`);
                return reject(stopErr);
            }
            console.log(`Service ${serviceName} stopped successfully.`);
            resolve();
        });
    });
}
function disableService(serviceName) {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(`sc config ${serviceName} start= disabled`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error disabling service: ${err.message}`);
                return resolve();
            }
            if (stderr) {
                console.error(`Error output: ${stderr}`);
                return resolve();
            }
            console.log(`Service ${serviceName} disabled successfully.`);
            resolve();
        });
    });
}
// Function to stop Windows service
function stopWindowsServiceSafe(serviceName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        (0, child_process_1.exec)(`sc query ${serviceName}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error querying service: ${error.message}`);
                return reject();
            }
            if (stderr) {
                console.error(`Error output: ${stderr}`);
                return reject();
            }
            if (stdout.includes('RUNNING')) {
                stopService(serviceName);
                disableService(serviceName);
            }
            resolve();
        });
    }));
}
function stopServices(serviceNames) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            for (const serviceName of serviceNames) {
                yield stopWindowsServiceSafe(serviceName);
            }
            resolve();
        }));
    });
}
