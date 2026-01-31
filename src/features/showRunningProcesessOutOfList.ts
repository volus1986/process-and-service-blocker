import {PROCESS_NAMES} from '../stopItemNames'
import getProcessOutOfListByNames from '../shared/utils/processes/getProcessOutOfListByNames.ts'

const EXCLUDE_PROCESS_NAMES = [
    'fastlist-0.3.0-x64.exe' // library using in current app in ps-list library
]

getProcessOutOfListByNames(PROCESS_NAMES).then((outOfList) => {
    function processNameFilter(processName: string) {
        return !EXCLUDE_PROCESS_NAMES.includes(processName);
    }

    const filteredProcesses = (outOfList.filter(el => processNameFilter(el.name)));

    const processes: Record<string, number> = {};

    filteredProcesses
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((el) => {
        const name = el.name;

        processes[name] ? processes[name]++ : processes[name] = 1;
    })

    // const differentProcesses = filteredProcesses.filter((e, i, arr) => arr.findIndex(k => e.name === k.name) === i);
    // console.log(differentProcesses);

    Object.keys(processes).forEach((name) => {
        console.log(`${name} : ${processes[name]}`);
    })
})
