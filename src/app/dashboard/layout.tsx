export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
            <header className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Server Monitor Dashboard</h1>
            </header>
            <main className="p-6">{children}</main>
        </section>
    );
}
