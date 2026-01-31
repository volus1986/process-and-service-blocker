import psList from 'ps-list';

export default async function getProcessesOutOfList(processNames:string[]) {
    try {
        const processes = await psList();

        return processes.filter(p =>
            !processNames.includes(p.name)
        );
    } catch (err) {
        console.error(err);

        return [];
    }
}
