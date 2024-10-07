'use client';

import React from 'react';

// 定義されたプロパティの型
type SegmentEditorProps = {
  segments: {
    code: string;
    name: string;
    ratio: string;
  }[];
  onAddRow: () => void;
  onDeleteRow: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const SegmentEditor: React.FC<SegmentEditorProps> = ({
  segments,
  onAddRow,
  onDeleteRow,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-gray-200 px-4 py-2" onClick={onAddRow}>
          行追加
        </button>
        <button className="bg-red-200 px-4 py-2" onClick={onDeleteRow}>
          行削除
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2">施設決統セグメント</th>
            <th className="border-b-2 py-2">施設決統セグメント名</th>
            <th className="border-b-2 py-2">構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b py-2 text-center">{segment.code}</td>
              <td className="border-b py-2 text-center">{segment.name}</td>
              <td className="border-b py-2 text-center">{segment.ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <label>施設決統セグメント</label>
          <input type="text" className="border p-1" />
          <label>構成比率</label>
          <input type="text" className="border p-1" />
          <span>%</span>
        </div>
        <div>
          <button className="bg-blue-200 px-4 py-2 mr-2" onClick={onConfirm}>
            行確定
          </button>
          <button className="bg-gray-200 px-4 py-2" onClick={onCancel}>
            行キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default SegmentEditor;
