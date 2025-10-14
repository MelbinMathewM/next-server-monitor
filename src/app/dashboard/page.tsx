import StatCard from "@/components/statCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getStats() {
    const res = await fetch(`${BASE_URL}/api/stats`, {
        next: { revalidate: 5 },
    });
    return res.json();
}

export default async function DashboardPage() {
    const stats = await getStats();

    return (
        <div className="p-8 grid gap-6 grid-cols-1 sm:grid-cols-3">
            <StatCard title="CPU Load" value={`${stats.cpuLoad}%`} href="/dashboard/cpu" />
            <StatCard title="Memory Usage" value={`${stats.memoryUsage}%`} href="/dashboard/memory" />
            <StatCard title="Uptime" value={stats.uptime} href="/dashboard/uptime" />
        </div>
    );
}