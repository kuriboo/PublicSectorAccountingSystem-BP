import React, { useState } from 'react';

// Props Type Definition
type EditFormProps = {
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
  initialText?: string;
  initialChecked?: boolean;
};

const EditForm: React.FC<EditFormProps> = ({
  onOk,
  onClear,
  onCancel,
  initialText = '',
  initialChecked = false,
}) => {
  const [text, setText] = useState<string>(initialText);
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  return (
    <div className="p-4 bg-white border rounded shadow-md">
      {/* Input Field */}
      <div className="flex items-center mb-4">
        <label className="mr-2">予算科目</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded p-1"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="mr-2"
        />
        <label>月割</label>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-gray-200 border rounded hover:bg-gray-300"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-200 border rounded hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 border rounded hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default EditForm;
```