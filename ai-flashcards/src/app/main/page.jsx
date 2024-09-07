"use client";

import { Button, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import FlashCard from "../../components/FlashCard.jsx";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader.jsx";
import { UserButton, useUser } from "@clerk/nextjs";
import { customAppearance } from "@/app/styles/customAppearance.js";
import SaveModal from "@/components/SaveModal.jsx";
export default function Main({ params }) {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // State for handling errors
  const [collectionName, setCollectionName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  function getJSON(response) {
    console.log(response);
    const parsedResponse = response.slice(7).slice(0, -4);
    const jsonResponse = JSON.parse(parsedResponse);
    console.log("JSON RES: ", jsonResponse);
    setResponse(jsonResponse);
    setIsLoading(false);
    return jsonResponse;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (prompt.trim().length === 0) {
      setError("This field is required.");
      return;
    }

    setIsLoading(true);
    setError(""); // Clear any existing error messages

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          message: `generate 10 flashcards on "${prompt}" in json`,
        }),
      });
      const data = await res.json();
      const response = getJSON(data.response);
    } catch (error) {
      console.error("Error:", error);
      console.log("Failed to generate response");
    }
  };
  async function handleSaveFlashCards(e) {
    e.preventDefault();
    setIsSaving(true);
    await fetch("http://localhost:3000/api/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: prompt,
        flashcards: response,
        name: collectionName,
      }),
    })
      .then((response) => {
        console.log("Status Code: ", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Success", data);
        return router.push("/my-collection");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setIsSaving(false);
  }

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5 container mx-auto">
        <div className="flex flex-row w-full justify-center relative">
          <form
            onSubmit={handleSubmit}
            className={`w-full max-w-md flex items-center transition-all duration-500 mx-auto`}
          >
            <div className="flex flex-col gap-2 flex-grow relative item">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter text to generate flashcards..."
                value={prompt}
                name="query"
                onChange={(e) => setPrompt(e.target.value)}
                required
                rows={4}
                style={{ resize: "none" }}
                disabled={isLoading}
              />
              {/* Display error message when prompt is empty */}
              {error && <span className="text-red-500 text-sm">{error}</span>}

              <Tooltip title="Generate">
                <Button
                  variant="contained"
                  style={{
                    padding: "4px",
                    borderRadius: "0.5rem",
                    letterSpacing: "2px",
                  }}
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  Generate
                </Button>
              </Tooltip>
            </div>
          </form>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          response.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full container h-screen overflow-scroll">
              {response.map((card, index) => (
                <FlashCard key={index} card={card} />
              ))}
            </div>
          )
        )}
        {response.length > 0 && !isLoading && (
          <div className="flex flex-row justify-center mt-4">
            <SaveModal
              collectionName={collectionName}
              setCollectionName={setCollectionName}
              handleSaveFlashCards={handleSaveFlashCards}
              isSaving={isSaving}
              setIsSaving={setIsSaving}
            />
          </div>
        )}
      </div>
    </div>
  );
}
