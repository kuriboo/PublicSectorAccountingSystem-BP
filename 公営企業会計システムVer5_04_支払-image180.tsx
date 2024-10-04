import React from 'react';

// Define the type for component props
interface ReportFormProps {
  reportDateRange: string;
  budgetHeadRange: string;
  onCalculate: () => void;
  onPrint: () => void;
  onClear: () => void;
  onExit: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  reportDateRange,
  budgetHeadRange,
  onCalculate,
  onPrint,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      {/* Output Level Section */}
      <div className="mb-4">
        <h3 className="font-bold">出力レベル</h3>
        <div>
          <label className="mr-4">
            <input type="radio" name="outputLevel" className="mr-2" />
            節
          </label>
          <label className="mr-4">
            <input type="radio" name="outputLevel" className="mr-2" />
            細節
          </label>
          <label>
            <input type="radio" name="outputLevel" className="mr-2" />
            明細
          </label>
        </div>
      </div>
      
      {/* Range Specification Section */}
      <div className="mb-4 border-t pt-4">
        <h3 className="font-bold">範囲指定</h3>
        <div className="flex justify-between">
          <div>
            <label className="block mb-2 font-semibold">作表年月</label>
            <input type="text" value={reportDateRange} className="border rounded p-2" readOnly />
          </div>
          <div>
            <label className="block mb-2 font-semibold">予算科目</label>
            <input type="text" value={budgetHeadRange} className="border rounded p-2" readOnly />
          </div>
        </div>
      </div>

      {/* Collection Target Section */}
      <div className="mb-4">
        <h3 className="font-bold">集計対象</h3>
        <div>
          <label className="mr-4">
            <input type="radio" name="collectionTarget" className="mr-2" />
            全体
          </label>
          <label className="mr-4">
            <input type="radio" name="collectionTarget" className="mr-2" />
            ブロック
          </label>
          <label>
            <input type="radio" name="collectionTarget" className="mr-2" />
            セグメント
          </label>
        </div>
      </div>

      {/* Checkbox Options */}
      <div className="mb-4">
        <div>
          <input type="checkbox" id="printPreviousMonth" className="mr-2" />
          <label htmlFor="printPreviousMonth">前月保護行のみでも印字する</label>
        </div>
        <div>
          <input type="checkbox" id="printWorkName" className="mr-2" />
          <label htmlFor="printWorkName">摘要欄に工事名を印字する</label>
        </div>
        <div>
          <input type="checkbox" id="printUnitName" className="mr-2" />
          <label htmlFor="printUnitName">摘要欄に単価名称を印字する</label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onCalculate} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
          集計
        </button>
        <button onClick={onPrint} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
          印刷
        </button>
        <button onClick={onClear} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;