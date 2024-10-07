// components/FormComponent.tsx
import React from 'react';

// Props type definition
type FormComponentProps = {
  year: string;
  businessType: string;
  nextBusinessType: string;
  transitionType: string;
  note: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  year,
  businessType,
  nextBusinessType,
  transitionType,
  note,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-xl font-bold mb-4">キャッシュ・フロー 計算書マスタコピー</h1>
      
      {/* Year and Business Type Section */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="mr-2">集計年度</span>
          <input className="border py-1 px-2" type="text" value={year} readOnly />
          <span className="ml-2">年度</span>
        </div>
        
        <div className="flex flex-col mb-4">
          <label htmlFor="businessType" className="mb-1">業務種類 (コピー元)</label>
          <select id="businessType" className="border py-1 px-3" value={businessType} readOnly>
            <option value="執行">執行</option>
            <option value="予算">予算</option>
          </select>
        </div>
      </div>

      {/* Transition Section */}
      <div className="mb-4">
        <div className="flex items-center">
          <span className="inline-block mr-2">今年度</span>
          <span className="inline-block mr-2">次年度</span>
        </div>
        <div className="flex items-center">
          <input type="radio" checked={transitionType === '間接法のみ'} readOnly />
          <span className="ml-2 mr-4">間接法のみ</span>
          <input type="radio" checked={transitionType === '直接法のみ'} readOnly />
          <span className="ml-2 mr-4">直接法のみ</span>
          <input type="radio" checked={transitionType === '両方'} readOnly />
          <span className="ml-2 mr-4">両方</span>
        </div>
      </div>

      {/* Next Business Type Section */}
      <div className="mb-4">
        <label htmlFor="nextBusinessType" className="mb-1">業務種類 (コピー先)</label>
        <select id="nextBusinessType" className="border py-1 px-3" value={nextBusinessType} readOnly>
          <option value="予算">予算</option>
          <option value="執行">執行</option>
        </select>
      </div>

      {/* Note Section */}
      <div className="mb-4">
        <p className="p-3 bg-white border">{note}</p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-end space-x-2">
        <button onClick={onExit} className="bg-gray-300 py-1 px-4 rounded">終了</button>
        <button onClick={onClear} className="bg-gray-300 py-1 px-4 rounded">クリア</button>
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
      </div>
    </div>
  );
};

export default FormComponent;
