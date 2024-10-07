// Import necessary modules.
import React from 'react';

// Define TypeScript types for the component's props.
type DocumentFormProps = {
  issuanceType: '新規' | '再発行';
  startDate: string;
  endDate: string;
  saveOption: string;
  onIssuanceTypeChange: (value: '新規' | '再発行') => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onSaveOptionChange: (value: string) => void;
};

// A reusable component for the document form.
const DocumentForm: React.FC<DocumentFormProps> = ({
  issuanceType,
  startDate,
  endDate,
  saveOption,
  onIssuanceTypeChange,
  onStartDateChange,
  onEndDateChange,
  onSaveOptionChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg max-w-md mx-auto">
      <h2 className="text-lg font-bold text-purple-800 mb-4">控除額支出命令書発行</h2>
      <div className="mb-4">
        <div className="mb-2">
          <span>発行区分</span>
        </div>
        <label className="mr-4">
          <input
            type="radio"
            checked={issuanceType === '新規'}
            onChange={() => onIssuanceTypeChange('新規')}
          />
          新規
        </label>
        <label>
          <input
            type="radio"
            checked={issuanceType === '再発行'}
            onChange={() => onIssuanceTypeChange('再発行')}
          />
          再発行
        </label>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <span>支払年月日</span>
        </div>
        <input
          className="border rounded p-2 mr-2"
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        <span>〜</span>
        <input
          className="border rounded p-2 ml-2"
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <span>伝票印字用自由設定項目</span>
        </div>
        <button
          className="bg-blue-500 text-white rounded p-2 mr-2"
          onClick={() => onSaveOptionChange('保存年限')}
        >
          保存年限
        </button>
        <span>{saveOption}</span>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="bg-gray-300 text-black rounded px-4 py-2">OK</button>
        <button className="bg-gray-300 text-black rounded px-4 py-2">クリア</button>
        <button className="bg-gray-300 text-black rounded px-4 py-2">終了</button>
      </div>
    </div>
  );
};

export default DocumentForm;