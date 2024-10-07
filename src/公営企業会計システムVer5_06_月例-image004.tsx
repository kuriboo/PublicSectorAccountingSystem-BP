import React from 'react';

type FormProps = {
  onSearch: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
  section: string;
  subSection: string;
  detail: string;
};

const FormComponent: React.FC<FormProps> = ({
  onSearch,
  onOk,
  onClear,
  onClose,
  section,
  subSection,
  detail
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <div className="bg-blue-800 text-white p-2 mb-4 rounded-md">振替入力仕訳科目登録</div>
      <div className="mb-4">
        <label className="block font-bold mb-2">貸方</label>
        <div className="flex items-center mb-2">
          <span className="w-20">節</span>
          <input type="text" value={section} readOnly className="border p-1 mr-2 w-24" />
          <span>未収給水収益</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="w-20">細節</span>
          <input type="text" value={subSection} readOnly className="border p-1 mr-2 w-16" />
          <span>未収給水収益</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="w-20">明細</span>
          <input type="text" value={detail} readOnly className="border p-1 mr-2 w-16" />
          <span>未収給水収益</span>
        </div>
        <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-1 rounded-md">科目検索</button>
      </div>
      <div className="flex justify-around">
        <button onClick={onOk} className="bg-gray-300 px-4 py-2 rounded-md">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded-md">クリア</button>
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
```