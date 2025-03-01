import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Destination from "@/models/Destination";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { id, answer } = await request.json();

    const destination = await Destination.findById(id);

    if (!destination) {
      return NextResponse.json({ error: "Destination not found" });
    }

    const isCorrect =
      answer.toLowerCase() === destination.city.toLowerCase() ||
      answer.toLowerCase() === destination.country.toLowerCase();

    return NextResponse.json({
      correct: isCorrect,
      correctAnswer: destination.city,
    });
  } catch (error) {
    console.error("Error checking answer:", error);
    return NextResponse.json({ error: "Failed to check answer" });
  }
}
