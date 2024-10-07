import React from 'react';

// Type definition for props
type TaxFormProps = {
  heading: string;
  rows: {
    category: string;
    values: string[];
  }[];
};

// Stateless functional component using Next.js + TypeScript
const TaxForm: React.FC<TaxFormProps> = ({ heading, rows }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md max-w-lg">
      {/* Form Heading */}
      <h1 className="text-lg font-bold mb-4">{heading}</h1>
      
      {/* Form Rows */}
      {rows.map((row, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span className="flex-1 font-medium">{row.category}</span>
          <div className="flex space-x-2">
            {row.values.map((value, i) => (
              <span key={i} className="border-b border-gray-300">{value}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaxForm;
