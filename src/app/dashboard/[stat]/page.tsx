import StatDetail from "@/components/statDetail";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type StatData =
    | { type: "CPU Load" | "Uptime"; value: number }
    | { type: "Memory"; total: number; free: number; value?: number }
    | { error: string };

async function getStatDetail(type: string): Promise<StatData> {
    const res = await fetch(`${BASE_URL}/api/stats/${type}`, {
        next: { revalidate: 5 },
    });
    return res.json();
}

export default async function StatPage({ params }: { params: { stat: string } }) {
    const { stat } = params;
    const data = await getStatDetail(stat);

    if ("error" in data) {
        return (
            <div className="text-center py-20">
                <h2 className="text-xl font-semibold text-red-500">{data.error}</h2>
            </div>
        );
    }

    return (
        <div className="p-8">
            <StatDetail data={data} />
        </div>
    );
}
