import { deleteCollection } from "@/database/flashcards";
import { getAuth } from "@clerk/nextjs/server";

export async function DELETE(req, { params }) {
  try {
    console.log("Params:", params);
    const user = getAuth(req);
    if (!user) {
      console.error("User is not authenticated");
      return new Response(
        JSON.stringify({ response: "User not authenticated" }, { status: 401 })
      );
    }

    const userId = user.userId;
    const res = await deleteCollection(params.id);
    if (res.success === true)
      return new Response(
        JSON.stringify({ response: "Data Deleted successfully" }),
        { status: 200 }
      );
    else {
      const error = new Error(res.message || "Error occured deleting data");
      error.status = 500;
      throw error;
    }
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ response: err.message }), {
      status: err.status || 500,
    });
  }
}
