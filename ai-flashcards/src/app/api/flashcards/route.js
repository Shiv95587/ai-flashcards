// import { NextResponse } from "next/server";
import { createFlashcards, getFlashCardsById } from "@/database/flashcards";
import { getFlashCards } from "@/database/flashcards";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const user = getAuth(req);
    if (!user) {
      console.error("User is not authenticated");
      return new Response(
        JSON.stringify({ response: "User not Authenticated" }),
        { status: 401 }
      );
    }
    console.log("Post Flashcards User: ", user);

    const userId = user.userId;
    const { query, flashcards, name } = await req.json();

    if (
      !query ||
      !flashcards ||
      query.trim().length === 0 ||
      flashcards.length === 0
    ) {
      return new Response(
        JSON.stringify({ response: "Query or Flashcards are missing" }),
        { status: 400 }
      );
    }

    console.log("QUERY", query);
    console.log("Cards", flashcards);
    const response = await createFlashcards(flashcards, query, userId, name);
    console.log(response);
    if (response.success) {
      return new Response(JSON.stringify({ response: response.message }), {
        status: 201,
      });
    } else {
      return new Response(JSON.stringify({ response: response.message }), {
        status: 500,
      });
    }
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ response: "Failed to generate content" }),
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    // Assuming you have a way to get the user from the request
    const user = getAuth(req); // Adjust this line according to your auth logic
    if (!user) {
      console.error("User is not authenticated");
      return new Response(
        JSON.stringify({ response: "User not Authenticated" }),
        { status: 401 }
      );
    }

    console.log("Get Flashcards User: ", user);
    const userId = user.userId; // Corrected to 'user.uid' for Firebase Auth
    // const userId = "user_2kpvqsm9R6z8AbTc3vM9vSDphi4";
    const res = await getFlashCardsById(userId);

    console.log("Flashcards data", res.data);
    return new Response(
      JSON.stringify({
        response: "Data received successfully",
        data: res.data,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        response: "Failed to retrieve flashcards from database",
      }),
      { status: 500 }
    );
  }
}

export async function DELETE(params) {
  try {
  } catch (err) {
    console.log("Error: ", err);
  }
}
