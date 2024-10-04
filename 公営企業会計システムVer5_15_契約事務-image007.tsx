// Import necessary dependencies
import React from 'react';

type FormData = {
  year: string;
  category: string;
  businessCode: string;
  businessName: string;
  rank: number;
  approval: string;
  completionAmount: number;
  evaluation: number;
  technicianFirstClass: number;
  technicianSecondClass: number;
  technicianOther: number;
  judgeScore: number;
  objectiveScore: number;
  totalScore: number;
};

type Props = {
  data: FormData;
  onSubmit: (data: FormData) => void;
  onClear: () => void;
};

const BusinessRegistrationForm: React.FC<Props> = ({ data, onSubmit, onClear }) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form className="p-4 bg-gray-100 rounded-md" onSubmit={handleSubmit}>
      {/* Year and Category Section */}
      <div className="flex items-center mb-4">
        <label className="mr-2">Year:</label>
        <input type="text" value={data.year} className="mr-4 p-1 border rounded" readOnly />
        <label className="mr-2">Category:</label>
        <select value={data.category} className="p-1 border rounded">
          <option value="工事">工事</option>
          <option value="その他">その他</option>
        </select>
      </div>

      {/* Business Details Section */}
      <div className="mb-4">
        <label className="block mb-1">Business Code and Name:</label>
        <input type="text" value={`${data.businessCode} ${data.businessName}`} 
          className="w-full p-1 border rounded" readOnly />
      </div>

      {/* Rank and Approval Section */}
      <div className="flex items-center mb-4">
        <label className="mr-2">Rank:</label>
        <input type="number" value={data.rank} className="mr-4 p-1 border rounded" readOnly />
        
        <label className="mr-2">Approval:</label>
        <select value={data.approval} className="p-1 border rounded">
          <option value="002:特定">002:特定</option>
        </select>
      </div>

      {/* Completion and Evaluation Section */}
      <div className="mb-4">
        <label className="block mb-1">Completion Amount (千円):</label>
        <input type="number" value={data.completionAmount} 
          className="w-full p-1 border rounded" readOnly />
        <label className="block mt-2">Evaluation:</label>
        <input type="number" value={data.evaluation} 
          className="w-full p-1 border rounded" readOnly />
      </div>

      {/* Technician and Scores Section */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-1">Technician First Class:</label>
          <input type="number" value={data.technicianFirstClass} 
            className="w-full p-1 border rounded" readOnly />
        </div>
        <div>
          <label className="block mb-1">Technician Second Class:</label>
          <input type="number" value={data.technicianSecondClass} 
            className="w-full p-1 border rounded" readOnly />
        </div>
        <div>
          <label className="block mb-1">Technician Other:</label>
          <input type="number" value={data.technicianOther} 
            className="w-full p-1 border rounded" readOnly />
        </div>
      </div>

      {/* Judge Scores Section */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-1">Judge Score:</label>
          <input type="number" value={data.judgeScore} 
            className="w-full p-1 border rounded" readOnly />
        </div>
        <div>
          <label className="block mb-1">Objective Score:</label>
          <input type="number" value={data.objectiveScore} 
            className="w-full p-1 border rounded" readOnly />
        </div>
        <div>
          <label className="block mb-1">Total Score:</label>
          <input type="number" value={data.totalScore} 
            className="w-full p-1 border rounded" readOnly />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">Clear</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
      </div>
    </form>
  );
};

export default BusinessRegistrationForm;