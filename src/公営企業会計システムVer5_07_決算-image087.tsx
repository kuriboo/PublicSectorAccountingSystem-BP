import React from 'react';

type TaxFormProps = {
  agentName1?: string;
  agentName2?: string;
  phonePart1?: string;
  phonePart2?: string;
  phonePart3?: string;
  isForm30Submitted?: boolean;
  isForm33Submitted?: boolean;
  onFormChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const TaxForm: React.FC<TaxFormProps> = ({
  agentName1 = '',
  agentName2 = '',
  phonePart1 = '',
  phonePart2 = '',
  phonePart3 = '',
  isForm30Submitted = false,
  isForm33Submitted = false,
  onFormChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div>
        <label className="block mb-2">税理士署名1</label>
        <input
          type="text"
          name="agentName1"
          className="border p-2 mb-4 w-full"
          value={agentName1}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="block mb-2">税理士署名2</label>
        <input
          type="text"
          name="agentName2"
          className="border p-2 mb-4 w-full"
          value={agentName2}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label className="block mb-2">電話番号</label>
        <div className="flex space-x-2">
          <input
            type="text"
            name="phonePart1"
            className="border p-2 flex-1"
            value={phonePart1}
            onChange={onFormChange}
          />
          <input
            type="text"
            name="phonePart2"
            className="border p-2 flex-1"
            value={phonePart2}
            onChange={onFormChange}
          />
          <input
            type="text"
            name="phonePart3"
            className="border p-2 flex-1"
            value={phonePart3}
            onChange={onFormChange}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="isForm30Submitted"
            className="border mr-2"
            checked={isForm30Submitted}
            onChange={onFormChange}
          />
          税理士法30条の書面提出有
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="isForm33Submitted"
            className="border mr-2"
            checked={isForm33Submitted}
            onChange={onFormChange}
          />
          税理士法33条の2の書面提出有
        </label>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded-md">OK</button>
        <button onClick={onClear} className="bg-gray-300 p-2 rounded-md">クリア</button>
        <button onClick={onCancel} className="bg-gray-500 text-white p-2 rounded-md">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxForm;
```