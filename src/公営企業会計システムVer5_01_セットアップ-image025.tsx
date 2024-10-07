import React from 'react';

type FormProps = {
  fiscalYear: string;
  codeTranslation: string;
  content: string;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const TranslationSettingsForm: React.FC<FormProps> = ({
  fiscalYear,
  codeTranslation,
  content,
  onPrev,
  onNext,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="text-center font-bold mb-4">継続仕訳設定</div>
      <div className="flex items-center justify-center mb-2">
        <input type="radio" name="action" id="register" defaultChecked />
        <label htmlFor="register" className="mr-4">登録</label>
        <input type="radio" name="action" id="edit" />
        <label htmlFor="edit">訂正</label>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex-1 mr-2">
          <div className="mb-1">年度: {fiscalYear}</div>
          <div className="mb-1">仕訳コード: {codeTranslation}</div>
          <div className="mb-1">内容: {content}</div>
        </div>
        <div className="flex-1 bg-white p-2 rounded-md shadow-inner">
          <div className="mb-1">画面番号</div>
          <input type="text" defaultValue="1" className="w-full mb-2 border" />
          <div className="mb-1">明細番号</div>
          <input type="text" defaultValue="1" className="w-full mb-2 border" />
          <div className="mb-1">継続仕訳コード</div>
          <input type="text" defaultValue="00001" className="w-full border" />
        </div>
      </div>
      <div className="flex justify-around">
        <button onClick={onPrev} className="px-4 py-1 bg-gray-300 rounded">前データ</button>
        <button onClick={onNext} className="px-4 py-1 bg-gray-300 rounded">次データ</button>
        <button onClick={onSubmit} className="px-4 py-1 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-1 bg-gray-300 rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-1 bg-gray-300 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default TranslationSettingsForm;
