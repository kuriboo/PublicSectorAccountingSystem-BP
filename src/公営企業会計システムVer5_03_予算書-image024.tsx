import React from 'react';

// Type definitions for the component props
interface InputFormProps {
  no: number;
  comment: string;
  onNoChange: (value: number) => void;
  onCommentChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  no,
  comment,
  onNoChange,
  onCommentChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <label className="w-1/4 text-blue-800 font-bold" htmlFor="no">
          No.
        </label>
        <input
          id="no"
          type="number"
          className="w-3/4 p-2 border border-gray-300 rounded"
          value={no}
          onChange={(e) => onNoChange(Number(e.target.value))}
        />
      </div>
      <div className="flex items-center mb-4">
        <label className="w-1/4 text-blue-800 font-bold" htmlFor="comment">
          備考
        </label>
        <input
          id="comment"
          type="text"
          className="w-3/4 p-2 border border-gray-300 rounded"
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
        />
      </div>
      <div className="flex justify-around">
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InputForm;
```