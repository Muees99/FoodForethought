"use client";

import HomeLayout from "./layout/HomeLayout";
import { Suspense } from "react";
import { FiLoader } from "react-icons/fi";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <FiLoader className="animate-spin h-12 w-12 text-green-500" />
  </div>
);

// Ex. asynchronous function
const fetchData = async () => {
  // Simulate fetching data
  return new Promise<string>((resolve) => {
    // explicitly specify the return type as string
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000); // Simulate a 2-second delay
  });
};

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeLayout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {/* --- */}
        </main>
      </HomeLayout>
    </Suspense>
  );
}
