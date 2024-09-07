"use client"; // Mark this file as a client component

import { useEffect, useState } from "react";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import SendIcon from "@mui/icons-material/Send";
import { useAuth, UserButton } from "@clerk/nextjs";
import { customAppearance } from "./styles/customAppearance.js";
import Hero from "@/sections/Hero.jsx";
import Pricing from "@/sections/Pricing.jsx";
import Footer from "@/sections/Footer.jsx";
import "./styles/landingPage.css";
// const customAppearance = {
//   elements: {
//     userButton: {
//       backgroundColor: "#0070f3",
//       color: "#ffffff",
//       padding: "0.5rem 1rem",
//       borderRadius: "4px",
//       border: "none",
//       cursor: "pointer",
//       fontSize: "16px",
//       display: "flex",
//       alignItems: "center",
//       gap: "0.5rem",
//     },
//     userButtonAvatarBox: "w-8 h-8",
//     userButtonIcon: {
//       borderRadius: "50%",
//       border: "2px solid #ffffff",
//     },
//   },
// };

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Footer />
    </>
  );
}

// export default function Home() {
//   const [prompt, setPrompt] = useState("");
//   const router = useRouter();

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (prompt.length > 0) router.push(`/main/${prompt}`);

//     setPrompt("");
//   }

//   return (
//     <>
//       {/* <nav className="box-border flex flex-row justify-end bg-gray-100 pt-4 pr-4 ">
//         <UserButton appearance={customAppearance} />
//       </nav> */}
//       <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
//         {
//           <h1 className="text-3xl font-bold mb-4 text-gray-800">
//             Hi! How can I help you?
//           </h1>
//         }
//         <form
//           onSubmit={handleSubmit}
//           className={`w-full max-w-md flex items-center ${"absolute bottom-10"} transition-all duration-500`}
//           method="POST"
//           action={`/main/${prompt}`}
//         >
//           <div className="flex-grow relative flex flex-row gap-4 items-center justify-center">
//             <input
//               type="text"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter text to generate flashcards..."
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               required
//             />
//             <Tooltip title="Generate">
//               <Button
//                 variant="contained"
//                 // endIcon={}
//                 style={{
//                   borderRadius: "0.5rem",
//                   padding: "11px",
//                 }}
//                 sx={{ height: "100%" }}
//                 onClick={handleSubmit}
//               >
//                 <SendIcon style={{ transform: "rotate(-135deg)" }} />
//               </Button>
//             </Tooltip>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
