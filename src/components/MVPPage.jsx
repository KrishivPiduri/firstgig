import React from "react";
import Navigation from "./Navigation";

export default function MVPPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">FirstGig MVP</h1>
          <p className="text-lg">This is the MVP page. Build your MVP here!</p>
        </div>
      </div>
    </>
  );
}
