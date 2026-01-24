"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stopProcesses_1 = __importDefault(require("./stopProcesses"));
const stopServices_1 = __importDefault(require("./stopServices"));
// Name of the process to terminate (example: notepad.exe)
const PROCESS_NAMES = [
    'msedge.exe', // microsoft edge browser
    'msedge_pwa_launcher.exe', // microsoft edge browser
    'msedgewebview2.exe', // microsoft edge browser
    'SearchHost.exe', // windows search ...
    'EdgeGameAssist.exe', // microsoft edge game service
    // '', //
];
const SERVICE_NAMES = [
    'wuauserv', // windows update
    'WSearch', // windows search
    'MicrosoftEdgeElevationService', // microsoft edge browser
    'edgeupdate', // microsoft edge
    'edgeupdatem', // microsoft edge
    'InstallService', // Microsoft Store Install Service
    // '',   //
];
console.log('Started');
setInterval(() => {
    (0, stopServices_1.default)(SERVICE_NAMES);
    (0, stopProcesses_1.default)(PROCESS_NAMES);
}, 1000);
