import { NextResponse } from "next/server";

export const config = {
    runtime: "edge",
};

export default function handler() {
    return NextResponse.json({ success: true, message: "Radha Radha" });
}
