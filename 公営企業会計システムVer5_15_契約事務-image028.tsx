```tsx
import React from 'react';

// Type definition for props
type SummaryComponentProps = {
  summaryText: string; // Text to be displayed in the summary area
  onOk: () => void; // Function to call when OK button is clicked
  onClear: () => void; // Function to call when Clear button is clicked
};

const SummaryComponent: React.FC<SummaryComponentProps> = ({
  summaryText,
  onOk,
  onClear,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-4">
      <table className="w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 bg-blue-600 text-white">概要</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-t border-gray-300">{summaryText}</td>
          </tr>
        </tbody>
      </table>
      <textarea
        className="w-full h-24 p-2 border border-gray-300 rounded mb-4"
        placeholder="概要"
        defaultValue={summaryText}
      />
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default SummaryComponent;
```