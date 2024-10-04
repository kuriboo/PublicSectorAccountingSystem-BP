```tsx
// Import necessary libraries and types
import React from 'react';

interface TaxFormProps {
  title: string;
  year: number;
  name: string;
  assessableAmount1: number;
  assessableAmount2: number;
  assessableAmount3: number;
}

const TaxForm: React.FC<TaxFormProps> = ({
  title,
  year,
  name,
  assessableAmount1,
  assessableAmount2,
  assessableAmount3,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-lg bg-white">
      {/* Header Section with Title */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm font-light">Year: {year}</p>
      </div>

      {/* User Information Section */}
      <div className="border-b pb-2 mb-4">
        <p className="font-medium">Name: {name}</p>
      </div>

      {/* Assessable Amounts Section */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Assessable Amount 1:</span>
          <span>{assessableAmount1.toFixed(2)} 円</span>
        </div>
        <div className="flex justify-between">
          <span>Assessable Amount 2:</span>
          <span>{assessableAmount2.toFixed(2)} 円</span>
        </div>
        <div className="flex justify-between">
          <span>Assessable Amount 3:</span>
          <span>{assessableAmount3.toFixed(2)} 円</span>
        </div>
      </div>
    </div>
  );
};

// Export component
export default TaxForm;
```