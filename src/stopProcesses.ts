import psList, {ProcessDescriptor} from 'ps-list';
import treeKill from 'tree-kill';

async function getProcessList(processNames:string[]) {
    try {
        const processes = await psList();

        return processes.filter(p =>
            processNames.includes(p.name)
        );
    } catch (err) {
        console.error(err);

        return [];
    }
}

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

export default async function stopProcesses(processNames:string[]) {
    try {
        const processes = await getProcessList(processNames);

        for (const proc of processes) {
            killProcess(proc);
        }
    } catch (err) {
        console.error('[ERROR] ps-list failed:', err);
    }
}
