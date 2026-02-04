import {exec} from 'child_process';

function stopService(serviceName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        exec(`sc stop ${serviceName}`, (err, out, stopErr) => {
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
    }).catch((err) => {
        console.error(`Error stopping service: ${err.message}`);
    })

}

function disableService(serviceName: string): Promise<void> {
    return new Promise<void>((resolve) => {
        exec(`sc config ${serviceName} start= disabled`, (err, stdout, stderr) => {
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
    })
}

// Function to stop Windows service
function stopWindowsServiceSafe(serviceName: string) {
    return new Promise<void>(async (resolve, reject) => {
        exec(`sc query ${serviceName}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error querying service: ${error.message}`);
                return reject();
            }
            if (stderr) {
                console.error(`Error output: ${stderr}`);
                return reject();
            }

            if (!stdout.includes('STOPPED')) { // check is service stopped
                stopService(serviceName);
                disableService(serviceName);
            }

            resolve();
        });
    })
}

export default async function stopServices(serviceNames: string[]): Promise<void> {
    return new Promise<void>(async (resolve) => {
        for (const serviceName of serviceNames) {
            await stopWindowsServiceSafe(serviceName);
        }

        resolve();
    })
}
