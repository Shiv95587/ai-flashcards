import { useState } from "react";

export default function SaveModal({
  collectionName,
  setCollectionName,
  handleSaveFlashCards,
  isSaving,
  setIsSaving,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        onClick={handleOpenModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        type="button"
      >
        Save Flashcards Collection
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-black">
                Save Flashcards Collection
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-gray-400 hover:bg-gray-200 hover:text-black rounded-lg p-2 inline-flex justify-center items-center"
                disabled={isSaving}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <form className="space-y-4" onSubmit={handleSaveFlashCards}>
                <div>
                  <label
                    htmlFor="collection-name"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Collection Name
                  </label>
                  <input
                    type="text"
                    name="collection-name"
                    id="collection-name"
                    onChange={(e) => setCollectionName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter collection name"
                    value={collectionName}
                    required
                    disabled={isSaving}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  // onClick={handleSaveFlashCards}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save Collection"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
