import React from "react";

const WelcomeToDashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>
        <p className="text-gray-600">
          Explore and manage your dashboard features.
        </p>
        <div className="mt-8">
          {/* Add additional content or links here */}
          <a
            href="/dashboard"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToDashboard;
