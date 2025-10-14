"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Chart({ data }: { data: number[] }) {
    const formattedData = data.map((v, i) => ({ name: `T${i}`, value: v }));

    return (
        <div className="h-64 bg-white dark:bg-gray-900 rounded-xl p-4 shadow">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={formattedData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
