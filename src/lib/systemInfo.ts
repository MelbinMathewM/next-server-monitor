import os from "os";

export function getSystemStats() {
    const cpus = os.loadavg();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const uptime = os.uptime();

    return {
        cpuLoad: cpus[0].toFixed(2),
        memoryUsage: (((totalMem - freeMem) / totalMem) * 100).toFixed(2),
        uptime: (uptime / 3600).toFixed(2) + " hrs",
    };
}

export function getStatDetail(type: string) {
    switch(type){
        case "cpu":
            return { type: "CPU Load", value: os.loadavg() };
        case "memory":
            return { type: "Memory", total: os.totalmem(), free: os.freemem() };
        case "uptime":
            return { type: "Uptime", value: os.uptime() };
        default:
            return { error: "Invalid stat type"};
    }
}