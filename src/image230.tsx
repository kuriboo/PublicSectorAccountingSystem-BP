import React from 'react';

// Propsの型定義
interface FormProps {
  department?: string;
  position?: string;
  name?: string;
  onSubmit: (formData: { department: string; position: string; name: string }) => void;
  onReset?: () => void;
  onCancel?: () => void;
}

const CustomForm: React.FC<FormProps> = ({ 
  department = '', 
  position = '', 
  name = '', 
  onSubmit, 
  onReset, 
  onCancel 
}) => {
  // 内部状態管理用
  const [formData, setFormData] = React.useState({ department, position, name });

  // 入力変更のハンドラー
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // フォーム送信時のハンドラー
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-lg">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-blue-800">所属</label>
        <input 
          type="text" 
          name="department" 
          value={formData.department} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-blue-800">職名</label>
        <input 
          type="text" 
          name="position" 
          value={formData.position} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-blue-800">氏名</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border rounded" 
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button 
          type="submit" 
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          OK
        </button>
        {onReset && (
          <button 
            type="button" 
            onClick={onReset} 
            className="px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-400"
          >
            クリア
          </button>
        )}
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel} 
            className="px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-400"
          >
            キャンセル
          </button>
        )}
      </div>
    </form>
  );
};

export default CustomForm;
```