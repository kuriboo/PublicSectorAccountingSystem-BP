import React from 'react';

type FormComponentProps = {
  year: number;
  beginNumber: string;
  endNumber: string;
  startDate: string;
  endDate: string;
  outputType: '加入負担金調定簿' | '工事負担金調定簿';
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  year,
  beginNumber,
  endNumber,
  startDate,
  endDate,
  outputType,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-xl mb-4">調定簿作成</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        
        {/* 範囲指定 */}
        <div className="mb-4">
          <h2 className="text-lg">範囲指定</h2>
          
          {/* 調定年度 */}
          <div className="flex items-center mb-2">
            <label className="mr-2">調定年度</label>
            <input
              type="number"
              value={year}
              className="w-16 border border-gray-300 rounded-md"
              readOnly
            />
            <span className="ml-2">年度</span>
          </div>
          
          {/* 調定番号 */}
          <div className="flex items-center mb-2">
            <label className="mr-2">調定番号</label>
            <input
              type="text"
              value={beginNumber}
              className="w-24 mx-1 border border-gray-300 rounded-md"
              readOnly
            />
            <span>~</span>
            <input
              type="text"
              value={endNumber}
              className="w-24 mx-1 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* 調定日 */}
          <div className="flex items-center mb-2">
            <label className="mr-2">調定日</label>
            <input
              type="text"
              value={startDate}
              className="w-36 mx-1 border border-gray-300 rounded-md"
              readOnly
            />
            <span>~</span>
            <input
              type="text"
              value={endDate}
              className="w-36 mx-1 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          
          {/* 出力調定簿 */}
          <div className="flex items-center">
            <label className="mr-2">出力調定簿</label>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="outputType"
                  value="加入負担金調定簿"
                  checked={outputType === '加入負担金調定簿'}
                  readOnly
                />
                加入負担金調定簿
              </label>
              <label>
                <input
                  type="radio"
                  name="outputType"
                  value="工事負担金調定簿"
                  checked={outputType === '工事負担金調定簿'}
                  readOnly
                />
                工事負担金調定簿
              </label>
            </div>
          </div>
        
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={onSubmit}>
            OK
          </button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-md" onClick={onClear}>
            クリア
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={onExit}>
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
```