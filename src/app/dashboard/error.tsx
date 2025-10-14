"use client";

export default function Error({ error }: { error: Error }) {
    return (
        <div className="text-center py-20 text-red-500">
            <p>Something went wrong:</p>
            <p>{error.message}</p>
        </div>
    );
}
