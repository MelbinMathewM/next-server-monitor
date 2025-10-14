import { NextResponse } from "next/server";
import { getStatDetail } from "@/lib/systemInfo";

export async function GET(
    request: Request,
    context: { params: { type: string } }
) {
    const { params } = context;
    const data = await getStatDetail(params.type);
    return NextResponse.json(data);
}
