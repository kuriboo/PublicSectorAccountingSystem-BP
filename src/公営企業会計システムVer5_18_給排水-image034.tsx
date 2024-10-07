import React from 'react';

// プロパティの型定義
type ButtonGroupProps = {
  onEditClick: () => void;
  onDeleteClick: () => void;
  onDetailClick: () => void;
  selectedOption: '税率毎' | '明細毎';
  onOptionChange: (option: '税率毎' | '明細毎') => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onEditClick,
  onDeleteClick,
  onDetailClick,
  selectedOption,
  onOptionChange,
}) => {
  return (
    <div className="flex space-x-2">
      {/* 明細編集ボタン */}
      <button
        onClick={onEditClick}
        className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded"
      >
        明細編集
      </button>

      {/* 行削除ボタン */}
      <button
        onClick={onDeleteClick}
        className="bg-red-200 hover:bg-red-300 text-black py-1 px-4 rounded"
      >
        行削除
      </button>

      {/* 選択オプション */}
      <div className="flex items-center">
        <span className="mr-2">端数処理</span>
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            checked={selectedOption === '税率毎'}
            onChange={() => onOptionChange('税率毎')}
            className="form-radio"
          />
          <span>税率毎</span>
        </label>
        <label className="flex items-center space-x-1 ml-2">
          <input
            type="radio"
            checked={selectedOption === '明細毎'}
            onChange={() => onOptionChange('明細毎')}
            className="form-radio"
          />
          <span>明細毎</span>
        </label>
      </div>

      {/* 税率別明細ボタン */}
      <button
        onClick={onDetailClick}
        className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded"
      >
        税率別明細
      </button>
    </div>
  );
};

export default ButtonGroup;