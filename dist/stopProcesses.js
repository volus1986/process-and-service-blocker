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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stopProcesses;
const ps_list_1 = __importDefault(require("ps-list"));
const tree_kill_1 = __importDefault(require("tree-kill"));
function getProcessList(processNames) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const processes = yield (0, ps_list_1.default)();
            return processes.filter(p => processNames.includes(p.name));
        }
        catch (err) {
            console.error(err);
            return [];
        }
    });
}
function killProcess(processDescriptor) {
    const processName = processDescriptor.name;
    const processPid = processDescriptor.pid;
    try {
        // Send SIGTERM (graceful stop)
        (0, tree_kill_1.default)(processDescriptor.pid, 'SIGTERM');
        console.log(`[KILLED] ${processName} (pid=${processPid})`);
    }
    catch (err) {
        console.error(`[ERROR] Failed to kill pid=${processPid}: ${err}`);
    }
}
function stopProcesses(processNames) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const processes = yield getProcessList(processNames);
            for (const proc of processes) {
                killProcess(proc);
            }
        }
        catch (err) {
            console.error('[ERROR] ps-list failed:', err);
        }
    });
}
