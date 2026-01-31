import stopProcesses from "./stopProcesses";
import stopServices from "./stopServices";
import {PROCESS_NAMES, SERVICE_NAMES} from "./stopItemNames";
import getAllWindowsServices from "./shared/utils/services/getAllWindowsServices";
import getCorrectServiceNames from "./shared/utils/services/getCorrectServiceNames";
import getProcessListByNames from "./shared/utils/processes/getProcessListByNames";

console.log('Started');

const correctServiceNames: Promise<string[]> = new Promise((resolve, reject) => {
    getAllWindowsServices().then((allWindowsServices) => {
        const allServiceNames = allWindowsServices.map(s => s.Name);

        resolve(getCorrectServiceNames(allServiceNames, SERVICE_NAMES))
    })
})

const intervalId = setInterval(async () => {
    await stopServices(await correctServiceNames);
    await stopProcesses(await getProcessListByNames(PROCESS_NAMES));
}, 1000);

// Ctrl+C (SIGINT)
process.on('SIGINT', () => {
    clearInterval(intervalId);
    console.log('Process stopped by SIGINT');
    process.exit(0);
});

// docker / pm2 / kill
process.on('SIGTERM', () => {
    clearInterval(intervalId);
    console.log('Process stopped by SIGTERM');
    process.exit(0);
});
