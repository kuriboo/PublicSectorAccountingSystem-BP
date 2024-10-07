import React from 'react';

interface PropertyAdjustmentFormProps {
  assetNumber: string;
  correctionDate: string;
  assetName: string;
  location: string;
  description: string;
  acquisitionDate: string;
  acquisitionAmount: number;
  degradationMethod: string;
  degradationRate: number;
  onEdit: () => void;
  onDelete: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const PropertyAdjustmentForm: React.FC<PropertyAdjustmentFormProps> = ({
  assetNumber,
  correctionDate,
  assetName,
  location,
  description,
  acquisitionDate,
  acquisitionAmount,
  degradationMethod,
  degradationRate,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">資産財源更正登録</h1>
      <div className="flex mb-4">
        <span className="w-1/3">資産番号: {assetNumber}</span>
        <span className="w-1/3">更正年月日: {correctionDate}</span>
      </div>
      <div className="mb-4">
        <span className="w-1/2">資産名称: {assetName}</span>
        <span className="w-1/2">所在: {location}</span>
      </div>
      <div className="mb-4">
        <span>摘要: {description}</span>
      </div>
      <div className="mb-4">
        <span className="w-1/2">取得年月日: {acquisitionDate}</span>
        <span className="w-1/2">取得価額: {acquisitionAmount.toLocaleString()}</span>
      </div>
      <div className="mb-4">
        <span className="w-1/2">償却方法: {degradationMethod}</span>
        <span className="w-1/2">償却限度率: {degradationRate.toFixed(2)}%</span>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
          編集
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
          削除
        </button>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onConfirm} className="bg-green-500 text-white px-4 py-2 rounded">
          行確定
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default PropertyAdjustmentForm;
