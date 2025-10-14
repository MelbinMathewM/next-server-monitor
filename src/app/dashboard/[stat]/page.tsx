import StatDetail from "@/components/statDetail";

async function getStatDetail(type: string) {
    const res = await fetch(`http://localhost:3000/api/stats/${type}`, {
        next: { revalidate: 5 },
    });
    return res.json();
}

export default async function StatPage({ params }: { params: { stat: string } }) {
    const stat = await getStatDetail(params.stat);

    if (stat.error) {
        return (
            <div className="text-center py-20">
                <h2 className="text-xl font-semibold text-red-500">{stat.error}</h2>
            </div>
        );
    }

    return (
        <div className="p-8">
            <StatDetail data={stat} />
        </div>
    );
}