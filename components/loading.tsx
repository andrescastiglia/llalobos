"use client";

import React from "react";

export const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
      <p className="mt-4 text-lg font-medium">Cargando...</p>
    </div>
  );
};