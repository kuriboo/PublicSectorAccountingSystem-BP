import React from 'react';

// 型定義
type Selection = {
  id: string;
  label: string;
};

type Remarks = {
  id: number;
  text: string;
};

interface MyComponentProps {
  yearOptions: string[];
  categoryOptions: string[];
  selections: Selection[];
  remarks: Remarks[];
  onSelectChange: (id: string, checked: boolean) => void;
  onRemarksChange: (id: number, text: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
}

// コンポーネント定義
const MyComponent: React.FC<MyComponentProps> = ({
  yearOptions,
  categoryOptions,
  selections,
  remarks,
  onSelectChange,
  onRemarksChange,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <label className="mr-2">年度</label>
        <select className="border">
          {yearOptions.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
        <label className="mx-4">受付区分</label>
        <select className="border">
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div className="border p-2 mb-4">
        <div className="mb-2">物件</div>
        <div>
          {selections.map((selection) => (
            <div key={selection.id}>
              <input
                type="checkbox"
                id={selection.id}
                onChange={(e) => onSelectChange(selection.id, e.target.checked)}
              />
              <label htmlFor={selection.id}>{selection.label}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border p-2 mb-4">
        <label className="mr-2">備考</label>
        {remarks.map((remark) => (
          <div key={remark.id}>
            <input
              className="border w-full mb-2"
              type="text"
              value={remark.text}
              onChange={(e) => onRemarksChange(remark.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-end space-x-4">
        <button className="border px-4 py-1" onClick={onSubmit}>OK</button>
        <button className="border px-4 py-1" onClick={onClear}>クリア</button>
        <button className="border px-4 py-1" onClick={onFinish}>終了</button>
      </div>
    </div>
  );
};

export default MyComponent;
```