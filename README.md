# Globetrotter Challenge

## 🌍 The Ultimate Travel Guessing Game!

Globetrotter is a full-stack web application where users get cryptic clues about a famous place and must guess the destination. After answering, they unlock fun facts, trivia, and surprises about the location!

## 🌐 Live Demo

https://globetrotter-game.vercel.app/

## 🚀 Features

- 🔹 **Random Clues**: Users receive 1–2 random clues per round.
- ✅ **Multiple Choice Answers**: Players select from multiple possible destinations.
- 🎉 **Funky Feedback**:
  - Correct Answer: Confetti animation + Fun Fact reveal.
  - Incorrect Answer: Sad-face animation + Fun Fact reveal.
- 🔄 **Replay Options**: "Next Destination" button to keep the fun going.
- 📊 **Score Tracking: Users receive a score out of 5.**
- 🏆 **Game Cap**: The game ends after 5 questions, displaying the final score and showing the "Play Again" and "Challenge a Friend" buttons.
- 👫 **Challenge a Friend**:
  - Invite friends via WhatsApp with a dynamic image & link.
  - Friends can see the inviter's score before playing.
- 🔒 **Backend-Protected Dataset**: Questions & answers are stored securely in the backend (MongoDB) to prevent cheating.

## 🛠 Tech Stack

- **Frontend**: Next.js (App Router), TailwindCSS
- **Backend**: Next.js API routes, MongoDB
- **Animations**: Framer Motion
- **Deployment**: Hosted on Vercel (or any preferred platform)

## 📂 Project Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Pratik1374/Globetrotter.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file.
   - Add the following:
     ```sh
     MONGODB_URI=your_mongodb_connection_string
     ```
4. Seed the database (run in development mode):
   ```sh
   npm run seed
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## 🚀 Deployment

- Ensure that `MONGODB_URI` is set in the production environment.

## 🏆 Bonus Enhancements

- 🎯 Extensible architecture for future features.
- 🛡️ Secure backend handling of game data.
