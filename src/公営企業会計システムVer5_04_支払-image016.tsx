import React from 'react';

type Props = {
  title?: string;
  submitLabel?: string;
  clearLabel?: string;
  endLabel?: string;
  onSubmit?: () => void;
  onClear?: () => void;
  onEnd?: () => void;
};

const DecisionInputForm: React.FC<Props> = ({
  title = '支出決定入力（物品・負担有）',
  submitLabel = 'OK',
  clearLabel = 'クリア',
  endLabel = '終了',
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md p-4">
      <h1 className="text-xl font-bold text-center mb-4">{title}</h1>
      
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">
              <span className="text-gray-700">決定処理日</span>
              <input type="text" className="form-input mt-1 block w-full" placeholder="令和05年10月30日" />
            </label>
          </div>

          <div>
            <label className="block">
              <span className="text-gray-700">決裁区分</span>
              <input type="text" className="form-input mt-1 block w-full" placeholder="課長・審査有" />
            </label>
          </div>

          <div>
            <label className="block">
              <span className="text-gray-700">支払日</span>
              <input type="text" className="form-input mt-1 block w-full" placeholder="令和05年11月30日" />
            </label>
          </div>

          <div>
            <label className="block">
              <span className="text-gray-700">請求書日</span>
              <input type="text" className="form-input mt-1 block w-full" placeholder="年_月_日" />
            </label>
          </div>
          
          {/* Add more fields as needed */}
        </div>
        
        <div className="flex justify-end space-x-2 mt-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onSubmit}
          >
            {submitLabel}
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClear}
          >
            {clearLabel}
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onEnd}
          >
            {endLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DecisionInputForm;
