"use client";

import { useState, useTransition } from "react";
import RefreshButton from "./refreshButton";
import Chart from "./chart";

export type StatData =
    | {
        type: "CPU Load" | "Uptime";
        value: number;
    }
    | {
        type: "Memory";
        total: number;
        free: number;
        value?: number;
    };

export default function StatDetail({ data }: { data: StatData }) {
    const [stat, setStat] = useState<StatData>(data);
    const [isPending, startTransition] = useTransition();

    async function refresh() {
        startTransition(async () => {
            const res = await fetch(`/api/stats/${stat.type.toLowerCase().split(" ")[0]}`);
            const fresh: StatData = await res.json();
            setStat(fresh);
        });
    }

    return (
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 shadow rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">{stat.type}</h2>
            <div className="text-lg">
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
                    {JSON.stringify(stat, null, 2)}
                </pre>
            </div>
            {Array.isArray(stat.value) && (
                <div className="mt-6">
                    <Chart data={stat.value} />
                </div>
            )}

            <div className="mt-6 flex justify-end">
                <RefreshButton onClick={refresh} disabled={isPending} />
            </div>
        </div>
    );
}
