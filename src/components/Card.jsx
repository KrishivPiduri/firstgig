import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white bg-opacity-10 rounded-xl shadow-lg p-6 mb-6 h-full flex flex-col ${className}`}>
      {children}
    </div>
  );
}
