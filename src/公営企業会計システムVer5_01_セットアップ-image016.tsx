import React from 'react';

type FormComponentProps = {
  startNumber: number;
  endNumber: number;
  shouldOutput: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  startNumber,
  endNumber,
  shouldOutput,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-xl mb-4 bg-blue-200 p-2 rounded">自由設定項目／内容マスタリスト作成</h1>
      <div className="bg-white border p-4 rounded">
        <h2 className="text-lg mb-4">範囲指定</h2>
        <div className="mb-4">
          <label className="block text-sm mb-2">自由設定項目</label>
          <input
            type="number"
            className="border p-2 mr-2"
            value={startNumber}
            readOnly
          />
          ～
          <input
            type="number"
            className="border p-2 ml-2"
            value={endNumber}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">自由設定内容</label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              checked={shouldOutput}
              readOnly
            />
            <span className="ml-2">出力する</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              className="form-radio"
              checked={!shouldOutput}
              readOnly
            />
            <span className="ml-2">出力しない</span>
          </label>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-gray-200 p-2 rounded" onClick={onSubmit}>OK</button>
        <button className="bg-gray-200 p-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-200 p-2 rounded" onClick={onFinish}>終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
```