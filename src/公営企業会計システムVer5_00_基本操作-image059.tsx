import React from 'react';

// Propsの型定義
type ExcelExportModalProps = {
  show: boolean;
  onClose: () => void;
  onSubmit: (option: 'あり' | 'なし') => void;
};

const ExcelExportModal: React.FC<ExcelExportModalProps> = ({ show, onClose, onSubmit }) => {
  const [option, setOption] = React.useState<'あり' | 'なし'>('あり');

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-4">
        {/* ヘッダー */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">EXCEL出力</h2>
          <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
            ×
          </button>
        </div>
        {/* ボディ */}
        <div className="mb-4">
          <label className="flex items-center">
            <span className="mr-2">検索条件シート</span>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="option"
                  value="あり"
                  checked={option === 'あり'}
                  onChange={() => setOption('あり')}
                />
                あり
              </label>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="なし"
                  checked={option === 'なし'}
                  onChange={() => setOption('なし')}
                />
                なし
              </label>
            </div>
          </label>
        </div>
        {/* フッター */}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => onSubmit(option)}
          >
            OK
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcelExportModal;