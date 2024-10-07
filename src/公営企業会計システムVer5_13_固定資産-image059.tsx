import React from 'react';

// Props type definition
interface DetailFormProps {
  title: string;
  startName: string;
  endName: string;
  startSpec: string;
  endSpec: string;
  startYear: string;
  endYear: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const DetailForm: React.FC<DetailFormProps> = ({
  title,
  startName,
  endName,
  startSpec,
  endSpec,
  startYear,
  endYear,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl mb-4">{title}</h2>
      
      <div className="mb-4">
        <label className="block font-semibold">作表年月日</label>
        <div className="text-blue-500">平成29年09月11日</div>
      </div>

      <div className="mb-6 border-t border-b pt-2 pb-2">
        <label className="block font-semibold mb-2">範囲指定</label>
        
        <div className="flex items-center mb-2">
          <span className="mr-2">管理名称</span>
          <input 
            type="text" 
            defaultValue={startName} 
            className="border p-1 rounded mr-2"
          />
          <span className="mr-2">~</span>
          <input 
            type="text" 
            defaultValue={endName} 
            className="border p-1 rounded"
          />
        </div>

        <div className="flex items-center mb-2">
          <span className="mr-2">管理規格</span>
          <input 
            type="text" 
            defaultValue={startSpec} 
            className="border p-1 rounded mr-2"
          />
          <span className="mr-2">~</span>
          <input 
            type="text" 
            defaultValue={endSpec} 
            className="border p-1 rounded"
          />
        </div>

        <div className="flex items-center mb-2">
          <span className="mr-2">取得年度</span>
          <input 
            type="text" 
            defaultValue={startYear} 
            className="border p-1 rounded mr-2"
          />
          <span className="mr-2">~</span>
          <input 
            type="text" 
            defaultValue={endYear} 
            className="border p-1 rounded"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black p-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default DetailForm;
```