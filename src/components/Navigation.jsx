import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="w-full bg-white bg-opacity-20 backdrop-blur-md shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-xl font-bold text-purple-800 hover:text-purple-600 transition">FirstGig</Link>
        <Link to="/" className="text-base font-medium text-gray-800 hover:text-purple-700 transition">Home</Link>
        <Link to="/mvp" className="text-base font-medium text-gray-800 hover:text-purple-700 transition">MVP</Link>
      </div>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-purple-700 text-white px-4 py-2 rounded font-semibold hover:bg-purple-800 transition">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}

