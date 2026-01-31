"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stopItemNames_1 = require("../stopItemNames");
const getAllWindowsServices_1 = __importDefault(require("../shared/utils/services/getAllWindowsServices"));
const getCorrectServiceNames_1 = __importDefault(require("../shared/utils/services/getCorrectServiceNames"));
(0, getAllWindowsServices_1.default)().then((allServices) => {
    const allRunningServices = allServices.filter(s => s.Status !== 1);
    const allRunningServiceNames = allRunningServices.map(service => service.Name);
    const correctServiceNames = (0, getCorrectServiceNames_1.default)(allRunningServiceNames, stopItemNames_1.SERVICE_NAMES);
    const filteredServices = allRunningServices.filter(s => !correctServiceNames.includes(s.Name));
    filteredServices.forEach((service) => console.log(service.Name));
});
