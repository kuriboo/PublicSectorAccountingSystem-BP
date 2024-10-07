import React from 'react';

// TypeScriptの型定義
interface AssetFormProps {
  date: string;
  dataDivision: 'all' | 'inputError';
  accountingDivision: 'none' | 'specific';
  assetCategoryStart: string;
  assetCategoryEnd: string;
  assetNumberStart: string;
  assetNumberEnd: string;
  acquisitionDateStart: string;
  acquisitionDateEnd: string;
}

// 再利用可能なコンポーネント
const AssetForm: React.FC<AssetFormProps> = ({
  date,
  dataDivision,
  accountingDivision,
  assetCategoryStart,
  assetCategoryEnd,
  assetNumberStart,
  assetNumberEnd,
  acquisitionDateStart,
  acquisitionDateEnd,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* 作表年月日 */}
      <div className="mb-4">
        <label className="mr-2">作表年月日:</label>
        <span>{date}</span>
      </div>
      
      {/* 作表区分 */}
      <div className="mb-4">
        <label className="mr-2">作表区分:</label>
        <label className="mr-2">
          <input 
            type="radio" 
            name="dataDivision" 
            value="all" 
            checked={dataDivision === 'all'}
            readOnly 
          />
          全データ
        </label>
        <label>
          <input 
            type="radio" 
            name="dataDivision" 
            value="inputError" 
            checked={dataDivision === 'inputError'}
            readOnly 
          />
          異動入力分
        </label>
      </div>
      
      {/* 会計区分 */}
      <div className="mb-4">
        <label className="mr-2">会計区分:</label>
        <label className="mr-2">
          <input 
            type="radio" 
            name="accountingDivision" 
            value="none" 
            checked={accountingDivision === 'none'}
            readOnly 
          />
          印字しない
        </label>
        <label>
          <input 
            type="radio" 
            name="accountingDivision" 
            value="specific" 
            checked={accountingDivision === 'specific'}
            readOnly 
          />
          会計区分別
        </label>
        <input 
          type="text" 
          className="border border-gray-300 rounded p-1 ml-2" 
          disabled={accountingDivision !== 'specific'}
        />
      </div>
      
      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="mr-2">範囲指定:</label>
        <div className="flex items-center mb-2">
          <span className="mr-2">固定資産科目</span>
          <input 
            type="text" 
            value={assetCategoryStart} 
            readOnly 
            className="border border-gray-300 rounded w-24 p-1 mr-2" 
          />
          <span className="mr-2">~</span>
          <input 
            type="text" 
            value={assetCategoryEnd} 
            readOnly 
            className="border border-gray-300 rounded w-24 p-1" 
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">資産番号</span>
          <input 
            type="text" 
            value={assetNumberStart} 
            readOnly 
            className="border border-gray-300 rounded w-24 p-1 mr-2" 
          />
          <span className="mr-2">~</span>
          <input 
            type="text" 
            value={assetNumberEnd} 
            readOnly 
            className="border border-gray-300 rounded w-24 p-1" 
          />
        </div>
        <div className="flex items-center">
          <span className="mr-2">取得年月日</span>
          <input 
            type="text" 
            value={acquisitionDateStart} 
            readOnly 
            className="border border-gray-300 rounded w-36 p-1 mr-2" 
          />
          <span className="mr-2">~</span>
          <input 
            type="text" 
            value={acquisitionDateEnd} 
            readOnly 
            className="border border-gray-300 rounded w-36 p-1" 
          />
        </div>
      </div>
      
      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">OK</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">クリア</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">終了</button>
      </div>
    </div>
  );
};

export default AssetForm;
