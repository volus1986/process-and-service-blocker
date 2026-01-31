"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stopItemNames_1 = require("../stopItemNames");
const getAllWindowsServices_1 = __importDefault(require("../shared/utils/services/getAllWindowsServices"));
const getCorrectServiceNames_1 = __importDefault(require("../shared/utils/services/getCorrectServiceNames"));
(0, getAllWindowsServices_1.default)().then((allServices) => {
    const allServiceNames = allServices.map(service => service.Name);
    const correctServiceNames = (0, getCorrectServiceNames_1.default)(allServiceNames, stopItemNames_1.SERVICE_NAMES);
    const filteredServiceNames = allServiceNames.filter(s => !correctServiceNames.includes(s));
    allServices.forEach((service) => console.log(service));
    // filteredServiceNames.forEach(serviceName => console.log(serviceName));
});
