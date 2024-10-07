import React from 'react';

type FormProps = {
  onSubmit: (data: { number: number; type: string }) => void;
  onClear: () => void;
  onCancel: () => void;
  buttonText?: {
    ok?: string;
    clear?: string;
    cancel?: string;
  };
};

const MyForm: React.FC<FormProps> = ({
  onSubmit,
  onClear,
  onCancel,
  buttonText = { ok: 'OK', clear: 'クリア', cancel: 'キャンセル' },
}) => {
  const [number, setNumber] = React.useState<number>(1);
  const [type, setType] = React.useState<string>('加算');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ number, type });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-md shadow-md">
      {/* Number Input */}
      <div className="flex items-center">
        <label className="mr-4">集計先行番号</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border border-gray-300 rounded p-1 w-20"
        />
      </div>

      {/* Type Select */}
      <div className="flex items-center">
        <label className="mr-4">加減区分</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded p-1"
        >
          <option value="加算">加算</option>
          <option value="減算">減算</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {buttonText.ok}
        </button>
        <button
          type="button"
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          {buttonText.clear}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          {buttonText.cancel}
        </button>
      </div>
    </form>
  );
};

export default MyForm;