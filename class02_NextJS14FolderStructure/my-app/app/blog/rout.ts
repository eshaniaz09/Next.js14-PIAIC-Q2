import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: "hello esha . It will return a json file. 😉" })
}

// In this folder , we are creating the custom file using rout.ts  that will return the json file
