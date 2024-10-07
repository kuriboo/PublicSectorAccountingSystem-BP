import React from 'react';

type ProcessingFormProps = {
  startDate: string;
  endDate: string;
  creationType: 'create' | 'delete';
  onDateChange: (startDate: string, endDate: string) => void;
  onCreationTypeChange: (type: 'create' | 'delete') => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ProcessingForm: React.FC<ProcessingFormProps> = ({
  startDate,
  endDate,
  creationType,
  onDateChange,
  onCreationTypeChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-lg font-bold text-center mb-6">自動仕訳作成処理（除却）</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-2">範囲指定</label>
        <div className="flex space-x-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => onDateChange(e.target.value, endDate)}
            className="border p-2 rounded-md w-full"
          />
          <span className="flex items-center">〜</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onDateChange(startDate, e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">作成区分</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="creationType"
              value="create"
              checked={creationType === 'create'}
              onChange={() => onCreationTypeChange('create')}
            />
            作成
          </label>
          <label>
            <input
              type="radio"
              name="creationType"
              value="delete"
              checked={creationType === 'delete'}
              onChange={() => onCreationTypeChange('delete')}
            />
            解除
          </label>
        </div>
      </div>
      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <p>処理概要</p>
        <p className="text-sm text-gray-600 mt-2">
          「除却資産対象登録」で登録した内容について、自動で仕訳を作成します。通常の除却処理が対象です。
          ※売却が伴う除却の仕訳は、作成できません。「調定用振替入力」画面より登録を行ってください。<br />
          ※除却時に許認可に振り替える仕訳等は、「自動仕訳作成処理（除却）解除入力」画面により処理を行った後、「振替入力」画面より、登録を行ってください。
        </p>
      </div>
      <div className="flex justify-end space-x-3">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700">
          終了
        </button>
      </div>
    </div>
  );
};

export default ProcessingForm;
