import { NextResponse } from "next/server";
import { getSystemStats } from "@/lib/systemInfo";

export async function GET() {
    const data = getSystemStats();
    return NextResponse.json(data);
}