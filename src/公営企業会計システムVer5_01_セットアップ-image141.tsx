import React from 'react';

// 定義されるプロパティの型
interface FormProps {
  title: string;
  description: string;
  options: string[];
  onSubmit: () => void;
  onCancel: () => void;
}

const CustomForm: React.FC<FormProps> = ({ title, description, options, onSubmit, onCancel }) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded shadow-lg p-4">
      {/* タイトル */}
      <div className="bg-blue-500 text-white text-lg p-2 rounded">{title}</div>
      
      {/* 説明 */}
      <div className="mt-4 p-2 border rounded">
        {description}
      </div>
      
      {/* セレクトボックス */}
      <div className="mt-4">
        <select className="border p-2 rounded w-full">
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4 space-x-2">
        <button 
          onClick={onSubmit} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          OK
        </button>
        <button 
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomForm;