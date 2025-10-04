import { NextResponse } from "next/server";
import supabase from "@/lib/client";

export async function GET() {
  try {
    const { data, error } = await supabase.from("person").select("*");

    if (error) {
      throw new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch persons" },
      { status: 500 }
    );
  }
}
