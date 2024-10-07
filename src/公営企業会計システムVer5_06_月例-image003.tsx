import React from 'react';

interface FormData {
  section: string;
  subSection: string;
  detail: string;
  taxType: '課税' | '非課税';
}

interface Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onSearch: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const CustomForm: React.FC<Props> = ({ data, onChange, onSearch, onOk, onClear, onClose }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow-md border">
      <h1 className="text-xl mb-4 text-center">振替入力予算科目登録</h1>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1">借方</label>
        <div className="flex items-center">
          <span className="mr-2">節</span>
          <input
            type="text"
            value={data.section}
            onChange={(e) => onChange('section', e.target.value)}
            className="border p-1 w-24 mr-2"
          />
          <span className="mr-2">配水・備消品費</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="mr-2">細節</span>
          <input
            type="text"
            value={data.subSection}
            onChange={(e) => onChange('subSection', e.target.value)}
            className="border p-1 w-24 mr-2"
          />
          <span className="mr-2">自動車用消耗品</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="mr-2">明細</span>
          <input
            type="text"
            value={data.detail}
            onChange={(e) => onChange('detail', e.target.value)}
            className="border p-1 w-24 mr-2"
          />
          <span>自動車用備品</span>
        </div>
        <button
          onClick={onSearch}
          className="mt-4 bg-blue-500 text-white rounded py-1 px-3 hover:bg-blue-600"
        >
          科目検索
        </button>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-bold mb-1">税区分</label>
        <div>
          <input
            type="radio"
            id="taxable"
            name="taxType"
            value="課税"
            checked={data.taxType === '課税'}
            onChange={() => onChange('taxType', '課税')}
          />
          <label htmlFor="taxable" className="ml-1 mr-4">課税</label>

          <input
            type="radio"
            id="nonTaxable"
            name="taxType"
            value="非課税"
            checked={data.taxType === '非課税'}
            onChange={() => onChange('taxType', '非課税')}
          />
          <label htmlFor="nonTaxable" className="ml-1">非課税</label>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={onOk} className="bg-gray-300 rounded py-1 px-3 hover:bg-gray-400">OK</button>
        <button onClick={onClear} className="bg-gray-300 rounded py-1 px-3 hover:bg-gray-400">クリア</button>
        <button onClick={onClose} className="bg-gray-300 rounded py-1 px-3 hover:bg-gray-400">終了</button>
      </div>
    </div>
  );
};

export default CustomForm;