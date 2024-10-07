// Import necessary libraries
import React from 'react';

// Define TypeScript types for component props
type CardProps = {
  title: string;
  subtitle: string;
};

// Functional component definition
const StatCard: React.FC<CardProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 text-center">
      {/* Title section */}
      <div className="font-bold text-lg">{title}</div>
      {/* Subtitle section */}
      <div className="mt-2 text-gray-600">{subtitle}</div>
    </div>
  );
};

// Export the component for reuse
export default StatCard;

// Usage example:
// <StatCard title="決算統計" subtitle="損益計算書集計処理" />
// <StatCard title="決算統計" subtitle="損益計算書" />
// <StatCard title="決算統計" subtitle="貸借対照表集計処理" />
// <StatCard title="決算統計" subtitle="貸借対照表" />
