"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stopItemNames_1 = require("../stopItemNames");
const getProcessOutOfListByNames_ts_1 = __importDefault(require("../shared/utils/processes/getProcessOutOfListByNames.ts"));
const EXCLUDE_PROCESS_NAMES = [
    'fastlist-0.3.0-x64.exe' // library using in current app in ps-list library
];
(0, getProcessOutOfListByNames_ts_1.default)(stopItemNames_1.PROCESS_NAMES).then((outOfList) => {
    function processNameFilter(processName) {
        return !EXCLUDE_PROCESS_NAMES.includes(processName);
    }
    const filteredProcesses = (outOfList.filter(el => processNameFilter(el.name)));
    const processes = {};
    filteredProcesses
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((el) => {
        const name = el.name;
        processes[name] ? processes[name]++ : processes[name] = 1;
    });
    // const differentProcesses = filteredProcesses.filter((e, i, arr) => arr.findIndex(k => e.name === k.name) === i);
    // console.log(differentProcesses);
    Object.keys(processes).forEach((name) => {
        console.log(`${name} : ${processes[name]}`);
    });
});
