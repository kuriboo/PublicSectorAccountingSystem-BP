```tsx
// Import necessary modules and types
import { FC } from "react";
import { useState } from "react";

// Define prop types for the component
interface VoucherEntryComponentProps {
  initialDateFrom?: string;
  initialDateTo?: string;
  onSubmit: (data: { dateFrom: string, dateTo: string, voucherNumber: string }) => void;
}

// Define the VoucherEntryComponent
const VoucherEntryComponent: FC<VoucherEntryComponentProps> = ({
  initialDateFrom = "",
  initialDateTo = "",
  onSubmit,
}) => {
  // Component state
  const [dateFrom, setDateFrom] = useState(initialDateFrom);
  const [dateTo, setDateTo] = useState(initialDateTo);
  const [voucherNumber, setVoucherNumber] = useState("0");

  // Handle form submission
  const handleSubmit = () => {
    onSubmit({ dateFrom, dateTo, voucherNumber });
  };

  // Component UI
  return (
    <div className="p-4 border rounded-md shadow-md max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">伝票管理入力</h1>
      
      {/* Date Range Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">伝票日付</label>
        <div className="flex space-x-2">
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="p-2 border rounded-md flex-1"
          />
          <span>～</span>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="p-2 border rounded-md flex-1"
          />
        </div>
      </div>

      {/* Voucher Number Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">伝票番号</label>
        <input
          type="number"
          value={voucherNumber}
          onChange={(e) => setVoucherNumber(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        表示
      </button>
    </div>
  );
};

export default VoucherEntryComponent;
```