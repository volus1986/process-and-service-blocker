import stopProcesses from "./stopProcesses";
import stopServices from "./stopServices";

// Name of the process to terminate (example: notepad.exe)
const PROCESS_NAMES = [
    'msedge.exe',               // microsoft edge browser
    'msedge_pwa_launcher.exe',  // microsoft edge browser
    'msedgewebview2.exe',       // microsoft edge browser
    'SearchHost.exe',           // windows search ...
    'EdgeGameAssist.exe',       // microsoft edge game service
    // '', //
];

const SERVICE_NAMES = [
    'wuauserv', // windows update
    'WSearch',   // windows search
    'MicrosoftEdgeElevationService',   // microsoft edge browser
    'edgeupdate',   // microsoft edge
    'edgeupdatem',   // microsoft edge
    'InstallService',   // Microsoft Store Install Service
    // '',   //
]

console.log('Started');

setInterval(() => {
    stopServices(SERVICE_NAMES);
    stopProcesses(PROCESS_NAMES);
}, 1000);
