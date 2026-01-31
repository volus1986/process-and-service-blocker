export default function getCorrectServiceNames(allServiceNames: string[], necessaryServiceNames: string[]) {
    function serviceFilter(serviceName:string) {
        return necessaryServiceNames.some(s => serviceName.startsWith(s));
    }

    return allServiceNames.filter(serviceFilter)
}
