import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Destination from "@/models/Destination";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await dbConnect();

    const destination = await Destination.findById(id);

    if (!destination) {
      return NextResponse.json({ error: "Destination not found" });
    }

    // Get one random fun fact
    const randomFact =
      destination.fun_fact[
        Math.floor(Math.random() * destination.fun_fact.length)
      ];

    return NextResponse.json({ funFact: randomFact });
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    return NextResponse.json({ error: "Failed to fetch fun fact" });
  }
}
