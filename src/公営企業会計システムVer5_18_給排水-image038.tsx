// pages/ReceptionForm.tsx
import React from 'react';
import { FC } from 'react';

interface FormProps {
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReceptionForm: FC<FormProps> = ({ onSubmit, onClear, onClose }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-center mb-4">受付登録</h1>

      <div className="mb-4">
        <label className="block text-gray-700">受付日</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-gray-800">申請者情報</h2>
        <div className="mb-2">
          <label className="block text-gray-700">施工場所</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">住所</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">氏名</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">電話番号</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-gray-800">工事代理人情報</h2>
        <div className="mb-2">
          <label className="block text-gray-700">工事店</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">住所</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">電話番号</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={onSubmit} className="bg-green-500 text-white py-2 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-yellow-500 text-white py-2 px-4 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReceptionForm;
