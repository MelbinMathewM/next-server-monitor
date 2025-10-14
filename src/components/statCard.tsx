"use client";

import Link from "next/link";

export default function StatCard({ title, value, href }: { title: string; value: string; href: string }) {
    return (
        <Link href={href}>
            <div className="p-6 bg-white dark:bg-gray-900 shadow rounded-2xl hover:scale-[1.02] transition">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-3xl font-bold mt-2">{value}</p>
            </div>
        </Link>
    );
}
