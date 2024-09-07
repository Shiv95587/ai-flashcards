import { database } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import {
  ref,
  get,
  set,
  serverTimestamp,
  remove,
  orderByChild,
  equalTo,
  query,
} from "firebase/database";
import { data } from "@/data/data";
export const createFlashcards = async (cards, query, userId, name) => {
  const uniqueKey = `${userId}_${uuidv4()}`;
  console.log("Unique Key: ", uniqueKey);
  try {
    await set(ref(database, `cards/${uniqueKey}`), {
      userId,
      query,
      cards,
      name,
      key: uniqueKey,
      createdAt: serverTimestamp(),
    });
    return { success: true, message: "Flashcards Created Successfully" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error Creating Flashcards",
      error,
    };
  }
};

// export const getFlashCards = async () => {
//   try {
//     const flashCardsRef = ref(database, "cards");
//     const snapshot = get(flashCardsRef);
//     if ((await snapshot).exists()) {
//       //   console.log("Snapshot: ", (await snapshot).val());
//       return {
//         success: true,
//         message: "Flashcards recieved successfully",
//         data: (await snapshot).val(),
//       };
//     } else {
//       throw new Error("failed to retrieve");
//     }
//   } catch (err) {
//     console.error(err);
//     return {
//       success: false,
//       message: "Error getting flashcards from database",
//       error: err,
//     };
//   }
// };

export const getFlashCardsById = async (userId) => {
  console.log("USER ID:", userId);
  try {
    // Reference to the 'cards' collection
    const cardsRef = ref(database, "cards");

    // Get the snapshot of the 'cards' collection
    const snapshot = await get(cardsRef);

    if (snapshot.exists()) {
      const allCards = snapshot.val();
      const userCards = [];

      // Iterate through all card sets and filter by userId
      Object.keys(allCards).forEach((key) => {
        const cardSet = allCards[key];
        if (cardSet.userId === userId) {
          userCards.push(cardSet); // Add matching card set to the array
        }
      });

      if (userCards.length > 0) {
        return {
          success: true,
          message: `FlashCards of user ${userId} received`,
          data: userCards, // Return the filtered card sets as an array
        };
      } else {
        return {
          success: true,
          message: "No data available for the user",
          data: [],
        };
      }
    } else {
      return {
        success: true,
        message: "No data available",
        data: [],
      };
    }
  } catch (err) {
    console.error(`Error getting flashcards of user with Id: ${userId}`, err);
    return {
      success: false,
      message: `Error getting flashcards of a user with Id: ${userId}`,
      error: err,
    };
  }
};

export const deleteCollection = async (collectionId) => {
  try {
    const dbref = ref(database, `cards/${collectionId}`);
    await remove(dbref);
    console.log("Data deleted successfully");
    return { success: true, message: "Data Deleted Successfully" };
  } catch (err) {
    console.error("Error deleting data:", err);
    return { success: false, message: "Error deleting data" };
  }
};
