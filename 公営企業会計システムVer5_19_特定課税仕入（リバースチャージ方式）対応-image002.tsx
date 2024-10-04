```tsx
import { FC } from "react";

interface FormProps {
  title: string;
  startDate: string;
  endDate: string;
  voucherNumberStart: number;
  voucherNumberEnd: number;
  summary: string;
  onSubmit: () => void;
}

const Form: FC<FormProps> = ({
  title,
  startDate,
  endDate,
  voucherNumberStart,
  voucherNumberEnd,
  summary,
  onSubmit
}) => {
  return (
    <div className="p-4 bg-purple-200 rounded">
      {/* Header */}
      <h1 className="text-xl font-bold text-center mb-4">{title}</h1>

      {/* Form */}
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="block">伝票日付:</label>
          <input
            type="date"
            value={startDate}
            className="border p-1 rounded"
          />
          <span className="mx-2">～</span>
          <input
            type="date"
            value={endDate}
            className="border p-1 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block">伝票番号:</label>
          <input
            type="number"
            value={voucherNumberStart}
            className="border p-1 rounded"
          />
          <span className="mx-2">～</span>
          <input
            type="number"
            value={voucherNumberEnd}
            className="border p-1 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block">摘要:</label>
          <input
            type="text"
            value={summary}
            className="border p-1 rounded w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-500 text-white py-1 px-3 rounded">
            表示
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
```