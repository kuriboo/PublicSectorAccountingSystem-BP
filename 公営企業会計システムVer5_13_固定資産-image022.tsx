```tsx
import React, { useState } from 'react';

// TypeScriptの型定義
type AssetFormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  formDate: string;
  assetType: 'tangible' | 'intangible' | 'all';
  accountingDivision: 'none' | 'specific';
  fixedAssetItem: string;
  assetNumber: string;
  acquisitionDateStart: string;
  acquisitionDateEnd: string;
  financialCodeStart: string;
  financialCodeEnd: string;
};

const AssetForm: React.FC<AssetFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    formDate: '',
    assetType: 'all',
    accountingDivision: 'none',
    fixedAssetItem: '',
    assetNumber: '',
    acquisitionDateStart: '',
    acquisitionDateEnd: '',
    financialCodeStart: '',
    financialCodeEnd: '',
  });

  // 入力変更イベントハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォーム送信イベントハンドラ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          作表年月日
          <input 
            type="text" 
            name="formDate" 
            value={formData.formDate} 
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">書式区分</span>
        <label>
          <input 
            type="radio" 
            name="assetType" 
            value="tangible" 
            checked={formData.assetType === 'tangible'} 
            onChange={handleChange}
            className="mr-1"
          /> 有形
        </label>
        <label className="ml-4">
          <input 
            type="radio" 
            name="assetType" 
            value="intangible" 
            checked={formData.assetType === 'intangible'}
            onChange={handleChange}
            className="mr-1"
          /> 無形
        </label>
        <label className="ml-4">
          <input 
            type="radio" 
            name="assetType" 
            value="all" 
            checked={formData.assetType === 'all'}
            onChange={handleChange}
            className="mr-1"
          /> すべて
        </label>
      </div>

      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">会計区分</span>
        <label>
          <input 
            type="radio" 
            name="accountingDivision" 
            value="none" 
            checked={formData.accountingDivision === 'none'} 
            onChange={handleChange}
            className="mr-1"
          /> 指定なし
        </label>
        <label className="ml-4">
          <input 
            type="radio" 
            name="accountingDivision" 
            value="specific" 
            checked={formData.accountingDivision === 'specific'}
            onChange={handleChange}
            className="mr-1"
          /> 会計区分別
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          固定資産科目
          <input 
            type="text" 
            name="fixedAssetItem" 
            value={formData.fixedAssetItem} 
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          資産番号
          <input 
            type="text" 
            name="assetNumber" 
            value={formData.assetNumber}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          取得年月日
          <input 
            type="text" 
            name="acquisitionDateStart" 
            value={formData.acquisitionDateStart}
            onChange={handleChange}
            placeholder="開始"
            className="mt-1 block w-full border-gray-300 rounded-md mb-2"
          />
          <input 
            type="text" 
            name="acquisitionDateEnd" 
            value={formData.acquisitionDateEnd}
            onChange={handleChange}
            placeholder="終了"
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          財源コード
          <input 
            type="text" 
            name="financialCodeStart" 
            value={formData.financialCodeStart}
            onChange={handleChange}
            placeholder="開始"
            className="mt-1 block w-full border-gray-300 rounded-md mb-2"
          />
          <input 
            type="text" 
            name="financialCodeEnd" 
            value={formData.financialCodeEnd}
            onChange={handleChange}
            placeholder="終了"
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          OK
        </button>
        <button
          type="button"
          className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md"
          // フォームをクリアする処理
          onClick={() => setFormData({
            formDate: '',
            assetType: 'all',
            accountingDivision: 'none',
            fixedAssetItem: '',
            assetNumber: '',
            acquisitionDateStart: '',
            acquisitionDateEnd: '',
            financialCodeStart: '',
            financialCodeEnd: '',
          })}
        >
          クリア
        </button>
      </div>
    </form>
  );
};

export default AssetForm;
```