// AssetSearchConditions.tsx
import React from 'react';

type AssetSearchConditionsProps = {
  assetNumber?: string;
  accountingCode?: string;
  searchType?: 'assetNumber' | 'rangeSearch' | 'keywordSearch';
  screenType?: 'fixedItems' | 'transferHistory' | 'structure' | 'nameSpecification';
  onSubmit: () => void;
};

const AssetSearchConditions: React.FC<AssetSearchConditionsProps> = ({
  assetNumber = '',
  accountingCode = '',
  searchType = 'assetNumber',
  screenType = 'fixedItems',
  onSubmit,
}) => {
  return (
    <div className="p-4 bg-gray-200 rounded-md">
      {/* Header */}
      <h1 className="text-lg font-bold mb-4">固定資産照会条件設定</h1>
      
      {/* Search Method */}
      <div className="mb-4">
        <label className="mr-2">検索方法:</label>
        <select className="border p-1">
          <option value="assetNumber">資産番号</option>
          <option value="rangeSearch">範囲検索</option>
          <option value="keywordSearch">キーワード検索</option>
        </select>
      </div>
      
      {/* Screen Type */}
      <div className="mb-4">
        <label className="mr-2">画面種類:</label>
        <select className="border p-1">
          <option value="fixedItems">固定項目</option>
          <option value="transferHistory">異動履歴</option>
          <option value="structure">構造</option>
          <option value="nameSpecification">名称・規格</option>
        </select>
      </div>
      
      {/* Asset Number and Accounting Code */}
      <div className="mb-4">
        <label className="mr-2">資産番号:</label>
        <input 
          type="text" 
          value={assetNumber} 
          className="border p-1 mr-4" 
        />
        <label className="mr-2">会計区分コード:</label>
        <input 
          type="text"
          value={accountingCode}
          className="border p-1"
        />
      </div>

      {/* Submit Button */}
      <button 
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        表示
      </button>
    </div>
  );
};

export default AssetSearchConditions;
