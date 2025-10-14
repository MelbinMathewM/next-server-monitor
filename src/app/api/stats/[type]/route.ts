import { NextResponse } from "next/server";
import { getStatDetail } from "@/lib/systemInfo";

export async function GET(_: Request, { params }: { params: { type: string }}) {
    const data = getStatDetail(params.type);
    return NextResponse.json(data);
}