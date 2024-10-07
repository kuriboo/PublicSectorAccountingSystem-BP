import React from 'react';

// 型定義
type Props = {
  relatedDivisionOptions: string[];
  selectedDivision: string;
  onDivisionChange: (value: string) => void;
  name: string;
  code: string;
  date: string;
  agent: string;
  chiefEngineer: string;
  siteSupervisor: string;
  onConfirmAction: () => void;
  onCancelAction: () => void;
};

const InspectionRelationComponent: React.FC<Props> = ({
  relatedDivisionOptions,
  selectedDivision,
  onDivisionChange,
  name,
  code,
  date,
  agent,
  chiefEngineer,
  siteSupervisor,
  onConfirmAction,
  onCancelAction,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      {/* 関係者区分セクション */}
      <div className="mb-4">
        <label className="block font-bold">関係者区分</label>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedDivision}
          onChange={(e) => onDivisionChange(e.target.value)}
        >
          {relatedDivisionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* 担当者セクション */}
      <div className="mb-4">
        <label className="block font-bold">担当者</label>
        <div className="flex items-center">
          <input
            type="text"
            disabled
            value={code}
            className="w-16 p-2 border rounded-md mr-2"
          />
          <span>{name}</span>
        </div>
      </div>

      {/* 任命日セクション */}
      <div className="mb-4">
        <label className="block font-bold">任命日</label>
        <input
          type="text"
          disabled
          value={date}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* 業者側関係者セクション */}
      <div className="mb-4">
        <label className="block font-bold">現場代理人</label>
        <input
          type="text"
          disabled
          value={agent}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">主任技術者</label>
        <input
          type="text"
          disabled
          value={chiefEngineer}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">現場主任者</label>
        <input
          type="text"
          disabled
          value={siteSupervisor}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* ボタンセクション */}
      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onConfirmAction}
        >
          行確定
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={onCancelAction}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default InspectionRelationComponent;
