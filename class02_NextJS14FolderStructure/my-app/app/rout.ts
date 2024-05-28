import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({message:'json response from home or / router'})
}