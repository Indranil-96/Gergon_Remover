// import React, { useState } from "react";

// function cleanText(input: string): string {
//     // Normalize whitespace and line breaks
//     let text = input.replace(/\r?\n|\r/g, " "); // remove line breaks
//     text = text.replace(/\s+/g, " ").trim();    // collapse spaces

//     // Remove hidden characters
//     text = text.replace(/[\u200B-\u200D\uFEFF]/g, "");

//     // Clean URLs
//     text = text.replace(
//         /(https?:\/\/[^\s]+)/g,
//         (url) => {
//             try {
//                 const u = new URL(url);
//                 // Remove tracking params
//                 ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid"].forEach(p => u.searchParams.delete(p));
//                 return u.origin + u.pathname + (u.search ? "?" + u.searchParams.toString() : "");
//             } catch {
//                 return url;
//             }
//         }
//     );

//     return text;
// }

// export default function CleanWizard() {
//     const [raw, setRaw] = useState("");
//     const [clean, setClean] = useState("");

//     const handleClean = () => setClean(cleanText(raw));

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//             <h1 className="text-2xl font-bold mb-4">🧙 Clean Copy-Paste Wizard</h1>

//             <textarea
//                 className="w-full max-w-lg h-40 p-3 border rounded mb-4"
//                 placeholder="Paste messy text here..."
//                 value={raw}
//                 onChange={(e) => setRaw(e.target.value)}
//             />

//             <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
//                 onClick={handleClean}
//             >
//                 Clean Text
//             </button>

//             <textarea
//                 className="w-full max-w-lg h-40 p-3 border rounded bg-white"
//                 placeholder="Clean text will appear here..."
//                 value={clean}
//                 readOnly
//             />

//             <button
//                 className="bg-green-600 text-white px-4 py-2 rounded mt-4"
//                 onClick={() => navigator.clipboard.writeText(clean)}
//             >
//                 Copy Clean Text
//             </button>
//         </div>
//     );
// }
