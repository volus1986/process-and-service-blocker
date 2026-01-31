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
const stopProcesses_1 = __importDefault(require("./stopProcesses"));
const stopServices_1 = __importDefault(require("./stopServices"));
const stopItemNames_1 = require("./stopItemNames");
const getAllWindowsServices_1 = __importDefault(require("./shared/utils/services/getAllWindowsServices"));
const getCorrectServiceNames_1 = __importDefault(require("./shared/utils/services/getCorrectServiceNames"));
const getProcessListByNames_1 = __importDefault(require("./shared/utils/processes/getProcessListByNames"));
console.log('Started');
const correctServiceNames = new Promise((resolve) => {
    (0, getAllWindowsServices_1.default)().then((allWindowsServices) => {
        const allServiceNames = allWindowsServices.map(s => s.Name);
        resolve((0, getCorrectServiceNames_1.default)(allServiceNames, stopItemNames_1.SERVICE_NAMES));
    });
});
const intervalId = setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, stopServices_1.default)(yield correctServiceNames);
    yield (0, stopProcesses_1.default)(yield (0, getProcessListByNames_1.default)(stopItemNames_1.PROCESS_NAMES));
}), 1000);
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
