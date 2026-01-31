"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getCorrectServiceNames;
function getCorrectServiceNames(allServiceNames, necessaryServiceNames) {
    function serviceFilter(serviceName) {
        return necessaryServiceNames.some(s => serviceName.startsWith(s));
    }
    return allServiceNames.filter(serviceFilter);
}
