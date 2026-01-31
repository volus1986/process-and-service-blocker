import treeKill from 'tree-kill';
import {ProcessDescriptor} from "ps-list";

function killProcess(processDescriptor: ProcessDescriptor) {
    const processName = processDescriptor.name;
    const processPid = processDescriptor.pid;

    try {
        // Send SIGTERM (graceful stop)
        treeKill(processDescriptor.pid, 'SIGTERM');

        console.log(`[KILLED] ${processName} (pid=${processPid})`);
    } catch (err) {
        console.error(
            `[ERROR] Failed to kill pid=${processPid}: ${err}`
        );
    }
}

export default async function stopProcesses(processList:ProcessDescriptor[]) {
    try {
        for (const proc of processList) {
            killProcess(proc);
        }
    } catch (err) {
        console.error('[ERROR] ps-list failed:', err);
    }
}
