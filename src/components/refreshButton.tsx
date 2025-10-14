"use client";

export default function RefreshButton({
    onClick,
    disabled,
}: {
    onClick: () => void;
    disabled: boolean;
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
            {disabled ? "Refreshing..." : "Refresh Data"}
        </button>
    );
}
