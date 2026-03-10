import React from "react";
import { Loader2 } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2
          size={48}
          className="animate-spin text-pakistan-green mx-auto mb-4"
        />
        <p className="text-gray-600">Loading Economic Dashboard...</p>
        <p className="text-sm text-gray-500 mt-2">Prime Minister's Office</p>
      </div>
    </div>
  );
};

export default LoadingState;
