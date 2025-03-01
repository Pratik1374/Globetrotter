import mongoose, { Schema, model, models } from "mongoose";

const DestinationSchema = new Schema(
  {
    city: { type: String, required: true },
    country: { type: String, required: true },
    clues: [{ type: String, required: true }],
    fun_fact: [{ type: String, required: true }],
    trivia: [{ type: String, required: true }],
  },
  { timestamps: true }
);

// Check if the model is already compiled to prevent OverwriteModelError in development
// This happens due to hot reloading in Next.js.
// If it exists, reuse the model; otherwise, create a new one.
const Destination =
  models.Destination || model("Destination", DestinationSchema);

export default Destination;
