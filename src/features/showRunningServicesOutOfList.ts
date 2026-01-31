import {SERVICE_NAMES} from '../stopItemNames'
import getAllWindowsServices from '../shared/utils/services/getAllWindowsServices'
import getCorrectServiceNames from '../shared/utils/services/getCorrectServiceNames'

getAllWindowsServices().then((allServices) => {
    const allRunningServices = allServices.filter(s => s.Status !== 1);
    const allRunningServiceNames = allRunningServices.map(service => service.Name);


    const correctServiceNames = getCorrectServiceNames(allRunningServiceNames, SERVICE_NAMES);

    const filteredServices = allRunningServices.filter(s => !correctServiceNames.includes(s.Name));

    filteredServices.forEach((service) => console.log(service.Name));
})

