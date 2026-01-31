import {execFile} from "child_process";

type AllWindowsServicesType = {Name: string, DisplayName: string, Status: number}[]
export default function getAllWindowsServices(): Promise<AllWindowsServicesType> {
    return new Promise((resolve, reject) => {
        const args = [
            '-NoProfile',
            '-Command',
            'Get-Service | Select Name, DisplayName, Status | ConvertTo-Json'
        ];

        execFile('powershell', args, (error, stdout, stderr) => {
            if (error) return reject(error);
            if (stderr) return reject(new Error(stderr));

            resolve(JSON.parse(stdout));
        });
    });
}
