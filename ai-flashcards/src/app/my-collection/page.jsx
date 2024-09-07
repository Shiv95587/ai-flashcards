"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import React, { useEffect, useState } from "react";
import FlashCard from "@/components/FlashCard";

const CollectionsPage = () => {
  // STATES
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);

  // LOGIC
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      getCollections();
    }

    fetchData();
  }, []);

  const getCollections = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/flashcards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error retrieving flashcards");
      }

      const data = await res.json();
      if (data.data.length === 0) setCollections([]);
      else setCollections(data.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
    setFlashcards(collection.cards || []); // Update flashcards based on the selected collection
  };

  const handleDeleteCollection = async (collectionId) => {
    try {
      console.log("Coll: ", collectionId);
      const res_1 = await fetch(
        `http://localhost:3000/api/flashcards/${collectionId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res_1.ok) {
        throw new Error("Error deleting collection");
      }

      const data_1 = await res_1.json();
      console.log("Data deleted successfully");
      const res_2 = await fetch("http://localhost:3000/api/flashcards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res_2.ok) {
        throw new Error("Error retrieving flashcards");
      }
      const data_2 = await res_2.json();
      if (selectedCollection.key === collectionId) setSelectedCollection(null);
      setCollections(data_2.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`flex h-screen ${
        loading ? "justify-center items-center" : ""
      }`}
    >
      {/* Sidebar with collection list */}
      {loading ? (
        <div className="flex flex-col items-center gap-2">
          <Loader />
          <div>Loading...</div>
        </div>
      ) : (
        <>
          {collections.length > 0 && (
            <div className="w-1/4 p-6 border-r bg-gray-100 h-full ">
              <h2 className="text-2xl font-semibold mb-4">Collections</h2>
              <ul className="space-y-2">
                {collections.map((collection) => (
                  <li
                    key={collection.key}
                    className={`flex justify-between items-center p-3 shadow hover:shadow-lg transition duration-200 rounded-full ${
                      collection.key === selectedCollection?.key
                        ? "bg-blue-600 text-slate-100"
                        : "hover:text-blue-600 text-gray-950 bg-slate-50"
                    }`}
                  >
                    <span
                      className={`cursor-pointer flex-grow`}
                      onClick={() => handleCollectionClick(collection)}
                    >
                      {collection.name || collection.query}
                      {/* Display collection name or query */}
                    </span>
                    <button
                      className={`font-bold px-2 hover:rounded-full ${
                        selectedCollection?.key === collection.key
                          ? "text-slate-100 hover:bg-gray-700"
                          : "text-red-500 hover:text-red-700"
                      }`}
                      onClick={() => handleDeleteCollection(collection.key)}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main content with flashcards */}

          {collections.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-xl">No Collections Found!</p>
            </div>
          ) : (
            <div className={`w-3/4 p-6 overflow-auto`}>
              {selectedCollection ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4">
                    {selectedCollection.name || selectedCollection.query}
                  </h2>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {flashcards.map((flashcard, index) => (
                      <FlashCard key={index} card={flashcard} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="h-full flex justify-center items-center">
                  <p className="text-gray-500 text-center">
                    Select a collection to view flashcards
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

// const CollectionsPage = () => {
//   return <h1> Hello</h1>;
// };
export default CollectionsPage;
