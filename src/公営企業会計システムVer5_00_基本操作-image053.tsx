import React from 'react';

// 型定義
type CSVExportModalProps = {
  onClose: () => void;
  onConfirm: (delimiter: string, includeQuotation: boolean, includeHeader: boolean) => void;
};

const CSVExportModal: React.FC<CSVExportModalProps> = ({ onClose, onConfirm }) => {
  const [delimiter, setDelimiter] = React.useState<string>('comma');
  const [includeQuotation, setIncludeQuotation] = React.useState<boolean>(false);
  const [includeHeader, setIncludeHeader] = React.useState<boolean>(false);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg">
      <div className="p-4 border-b">
        <span className="font-bold">CSV出力</span>
        <button className="float-right" onClick={onClose}>✖</button>
      </div>
      <div className="p-4">
        {/* 区切り文字選択 */}
        <div className="mb-2">
          <span>区切り文字 </span>
          <label>
            <input
              type="radio"
              name="delimiter"
              checked={delimiter === 'comma'}
              onChange={() => setDelimiter('comma')}
            /> カンマ
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="delimiter"
              checked={delimiter === 'tab'}
              onChange={() => setDelimiter('tab')}
            /> タブ
          </label>
        </div>
        {/* 「」の有無選択 */}
        <div className="mb-2">
          <label>
            「」の有無
            <input
              type="radio"
              name="quotation"
              checked={includeQuotation}
              onChange={() => setIncludeQuotation(true)}
            /> あり
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="quotation"
              checked={!includeQuotation}
              onChange={() => setIncludeQuotation(false)}
            /> なし
          </label>
        </div>
        {/* 項目名称行の有無選択 */}
        <div className="mb-4">
          <label>
            項目名称行
            <input
              type="radio"
              name="header"
              checked={includeHeader}
              onChange={() => setIncludeHeader(true)}
            /> あり
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="header"
              checked={!includeHeader}
              onChange={() => setIncludeHeader(false)}
            /> なし
          </label>
        </div>
        {/* ボタン */}
        <div className="flex justify-end">
          <button className="mr-2 py-1 px-4 bg-gray-300 rounded" onClick={() => onConfirm(delimiter, includeQuotation, includeHeader)}>
            OK
          </button>
          <button className="py-1 px-4 bg-gray-300 rounded" onClick={onClose}>
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSVExportModal;
```