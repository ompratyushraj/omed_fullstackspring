import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl bg-gray-800 shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`text-center ${className}`}>
      {children}
    </div>
  );
}
