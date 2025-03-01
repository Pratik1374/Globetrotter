import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Destination from "@/models/Destination";

export async function GET() {
  await dbConnect();

  // Get one random destination
  const numberOfClues = Math.random() < 0.5 ? 1 : 2;
  const randomDestination = await Destination.aggregate([
    { $sample: { size: 1 } },
    {
      $project: {
        city: 1,
        country: 1,
        clues: { $slice: ["$clues", numberOfClues] },
        fun_fact: 1,
        trivia: 1,
      },
    },
  ]);

  if (randomDestination.length === 0) {
    return NextResponse.json(
      { error: "No destination found" },
      { status: 404 }
    );
  }

  const destination = randomDestination[0];

  // Get 3 random incorrect options
  const incorrectOptions = await Destination.aggregate([
    { $match: { city: { $ne: destination.city } } },
    { $sample: { size: 3 } },
    { $project: { city: 1 } },
  ]);

  // Combine correct and incorrect options
  const allOptions = [
    destination.city,
    ...incorrectOptions.map((opt) => opt.city),
  ];

  // Shuffle options
  const shuffledOptions = allOptions
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  destination.options = shuffledOptions;

  return NextResponse.json(destination);
}
